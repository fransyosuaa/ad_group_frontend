import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../ui/filter';
import Loader from '../ui/loader';
import styles from '../../styles/components/form/ipManagement.module.scss';
import IpLabelManagementList from '../ui/ipLabelManagementList';
import { getWithExpiry, isIpFormatPassed } from '../../utils';
import { keyLocalStorage } from '../../constants';

const IpManagement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filterType, setFilterType] = useState('ip');
  const [filterText, setFilterText] = useState('');
  const [token, setToken] = useState('');
  const [ipList, setIpList] = useState([]);

  useEffect(() => {
    const locStorage = getWithExpiry(keyLocalStorage);
    if (!locStorage) {
      window.location.href = '/';
      return;
    }
    const fetchData = async () => {
      const { token: tkn } = locStorage;
      setToken(tkn);
      setIsLoading(true);
      const resp = await axios.get('/api/ipLabel', {
        headers: {
          'x-access-token': tkn
        },
        params: {
          page: 1,
          perPage: 1000
        }
      });

      const {
        data: { data: response }
      } = resp;
      setIpList(response);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getIpLogs = async (params) => {
    try {
      setIsLoading(true);
      const resp = await axios.get('/api/ipLabel', {
        headers: {
          'x-access-token': token
        },
        params: {
          page: 1,
          perPage: 1000,
          ...params
        }
      });

      const {
        data: { data: response }
      } = resp;
      setIpList(response);
    } catch (error) {
      console.log({
        api: error?.response?.data?.message || error?.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterTypeHandler = (e) => {
    setFilterType(e.target.value);
  };
  const doFilter = () => {
    if (filterText === '') {
      return getIpLogs({});
    }
    if (filterType === 'ip') {
      if (isIpFormatPassed(filterText)) {
        getIpLogs({ ipAddress: filterText });
      }
    } else if (filterType === 'label') {
      const params = {
        label: filterText !== '' ? filterText : undefined
      };
      getIpLogs(params);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <Filter doFilter={doFilter} value={filterText} textChangeHandler={setFilterText} />
        <div className={styles['filter-by']}>
          <label>Filter By</label>
          <select onChange={filterTypeHandler} value={filterType}>
            <option value="ip">By IP</option>
            <option value="label">By Label</option>
          </select>
        </div>
      </div>
      <div className={styles['section-two']}>
        <div className={styles.create}>
          <Link href="/ip-management/create">
            <button>Create new</button>
          </Link>
        </div>
        <IpLabelManagementList ipList={ipList} />
      </div>
    </>
  );
};

export default IpManagement;
