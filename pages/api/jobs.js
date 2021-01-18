// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs';

const jobList = async (req, res) => {
  
  const searchWord = req.headers.searchword;
  const matched = [];
  let totalJobNum = 0;

  // initial fetch request without search keyword
  if (!searchWord) {

    // calculating total job numbers
    jobs.forEach((hosp) => {
      totalJobNum += hosp.total_jobs_in_hospital;
    });

    res.statusCode = 200;
    res.json({ jobs, totalJobNum });

    // filter based on search term
  } else {
    const regex = new RegExp(searchWord, 'i');
    let i = 0;

    while (i < jobs.length) {

      const hospital = jobs[i];

      // checking if searchword is in name or job_title of the hospital
      if (hospital.name.match(regex) || hospital.job_title.match(regex)) {
        matched.push(hospital);
        totalJobNum += hospital.total_jobs_in_hospital;
        i++;

      // going inside the items array to check the searchword
      } else {
        const newItems = [];
        hospital.items.forEach((eachJob) => {
          Object.entries(eachJob).forEach(([k, v]) => {
            if (
              k === 'required_skills' ||
              (k === 'department' && !newItems.includes(eachJob))
            ) {
              if (v.some((str) => str.match(regex))) {
                newItems.push(eachJob);
                return;
              }
            } else {
              // using new String to convert number to string
              if (new String(v).match(regex) && !newItems.includes(eachJob)) {
                newItems.push(eachJob);
                return;
              }
            }
          });
        });
        hospital.items = newItems;

        // checking the length of hospital.items to make sure to not push if empty
        if (hospital.items.length !== 0) {
          hospital.total_jobs_in_hospital = hospital.items.length;
          matched.push(hospital);
          totalJobNum += hospital.total_jobs_in_hospital;
        }

        i++;
      }
    }

    // @todo: implement filters and search
    // @todo: implement automated tests => in the __test__ file

    // this timeout emulates unstable network connection, do not remove this one
    // you need to figure out how to guarantee that client side will render
    // correct results even if server-side can't finish replies in the right order
    await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

    res.status(200).send({ matched, totalJobNum });
  }
};

export default jobList;
