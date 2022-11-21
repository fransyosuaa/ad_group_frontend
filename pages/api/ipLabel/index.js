import axios from 'axios';
import { getFullPath } from '../../../utils';

const handler = async (req, res) => {
  try {
    const { method, headers, query, body } = req;
    if (method === 'GET') {
      if (query?.id) {
        const response = await axios.get(getFullPath(`/ip-label/${query.id}`), {
          headers
        });
        return res.status(200).json(response.data);
      }
      const response = await axios.get(getFullPath('/ip-label'), {
        headers,
        params: {
          ...query
        }
      });
      return res.status(200).json(response.data);
    }
    if (method === 'POST') {
      const response = await axios.post(getFullPath('/ip-label'), body, {
        headers
      });
      return res.status(200).json(response.data);
    }
    if (method === 'PUT') {
      const response = await axios.put(getFullPath('/ip-label'), body, {
        headers
      });
      return res.status(200).json(response.data);
    }
  } catch (error) {
    if (error?.response) {
      const { response } = error;
      return res.status(response.status).json(response.data);
    }
    throw new Error(error);
  }
};

export default handler;
