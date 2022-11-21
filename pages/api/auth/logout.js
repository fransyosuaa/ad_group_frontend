import axios from 'axios';
import { getFullPath } from '../../../utils';

const handler = async (req, res) => {
  try {
    const response = await axios.post(getFullPath('/auth/logout'), req.body);
    res.status(200).json(response.data);
  } catch (error) {
    if (error?.response) {
      const { response } = error;
      return res.status(response.status).json(response.data);
    }
    throw new Error(error);
  }
};

export default handler;
