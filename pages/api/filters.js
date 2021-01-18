// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filtersData from '../../data/filters';

const sendFiltersFile = async (req, res) => {
  
  res.statusCode = 200;
  res.json({filtersData});
};

export default sendFiltersFile;
