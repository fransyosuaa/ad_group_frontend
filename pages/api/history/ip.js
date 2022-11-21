import axios from 'axios';
import { getFullPath } from '../../../utils';

const handler = async (req, res) => {
  try {
    const { headers, query } = req;
    const response = await axios.get(getFullPath('/audit-log/ip-label'), {
      headers,
      params: {
        ...query
      }
    });
    return res.status(200).json(response.data);
  } catch (error) {
    if (error?.response) {
      const { response } = error;
      return res.status(response.status).json(response.data);
    }
    throw new Error(error);
  }
};

export default handler;
