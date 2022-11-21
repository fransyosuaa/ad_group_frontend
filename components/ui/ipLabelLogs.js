import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/components/ui/ipLabelLogs.module.scss';
import { getWithExpiry } from '../../utils';
import { keyLocalStorage } from '../../constants';
import axios from 'axios';

const IpLabelLogs = ({ id }) => {
  const [logList, setLogList] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const locStorage = getWithExpiry(keyLocalStorage);
    if (!locStorage) {
      window.location.href = '/';
    }
    const { token: tkn } = locStorage;
    setToken(tkn);
  }, []);

  useEffect(() => {
    if (id && token !== '') {
      const fetchData = async () => {
        const resp = await axios.get('/api/history/ip', {
          headers: {
            'x-access-token': token
          },
          params: { id, page: 1, perPage: 1000 }
        });

        const {
          data: { data: response }
        } = resp;
        setLogList(response);
      };
      fetchData();
    }
  }, [id, token]);

  return (
    <>
      <div className={styles.fullwidth}>
        <div className={styles.table}>
          <div>IP Address</div>
          <div>Old Label</div>
          <div>New Label</div>
          <div>Created At</div>
          <div>Created By</div>
        </div>

        {logList.map((log) => {
          return (
            <div key={log.id} className={styles['table-child']}>
              <div>{log.ipAddress}</div>
              <div>{log.oldLabel}</div>
              <div>{log.newLabel}</div>
              <div>{log.createdAt}</div>
              <div>{log.createdBy}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IpLabelLogs;

IpLabelLogs.propTypes = {
  id: PropTypes.string.isRequired
};
