import Link from 'next/link';
import { useEffect, useState } from 'react';
import Filter from '../ui/filter';
import styles from '../../styles/components/form/ipManagement.module.scss';
import IpLabelManagementList from '../ui/ipLabelManagementList';
import { getWithExpiry } from '../../utils';
import { keyLocalStorage } from '../../constants';

const IpManagement = () => {
  useEffect(() => {
    if (!getWithExpiry(keyLocalStorage)) {
      window.location.href = '/';
    }
  }, []);

  const [filterType, setFilterType] = useState('ip');

  const filterTypeHandler = (e) => {
    setFilterType(e.target.value);
  };
  const doFilter = (filterText) => {
    console.log('doFilter parent', filterText);
    if (filterText !== '' && filterType === 'ip') {
      // check input ip regex or not
    } else {
      // logic here
    }
  };

  return (
    <>
      <div>
        <Filter doFilter={doFilter} />
        <div className={styles['filter-by']}>
          <label>Filter By</label>
          <select onChange={filterTypeHandler}>
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
        <IpLabelManagementList />
      </div>
    </>
  );
};

export default IpManagement;
