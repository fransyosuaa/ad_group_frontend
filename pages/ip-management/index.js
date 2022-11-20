import Link from 'next/link';
import { useState } from 'react';
import Card from '../../components/ui/card';
import Filter from '../../components/ui/filter';
import Navigation from '../../components/ui/navigation';
import styles from '../../styles/pages/ip-management.module.scss';

const IpManagement = () => {
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
      <Navigation />
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
              <button>Create new</button>
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
    </>
  );
};

export default IpManagement;
