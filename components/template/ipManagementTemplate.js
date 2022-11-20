import Link from 'next/link';
import { useState } from 'react';
import Card from '../ui/card';
import Filter from '../ui/filter';
import styles from '../../styles/template/ipManagementTemplate.module.scss';

const IpManagementTemplate = () => {
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
    <div className="container">
      <Card>
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
          <div className={styles.table}>
            <div className={styles.table.div}>
              <div>IP Address</div>
              <div>Label</div>
              <div>Action</div>
            </div>
            {/* should in loop here */}
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
            <div className={styles['table-child']}>
              <div>172.20.20.12</div>
              <div>Stark Corporation</div>
              <div>
                <Link href="blablabla/id">Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IpManagementTemplate;
