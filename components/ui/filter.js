import { useState } from 'react';
import styles from '../../styles/components/ui/filter.module.scss';

const Filter = ({ doFilter }) => {
  const [filterText, setFilterText] = useState('');
  const filterHandler = (e) => {
    setFilterText(e.target.value);
  };
  const searchHandler = () => {
    doFilter(filterText);
  };

  return (
    <>
      <div>
        <label className={styles.label}>Filter</label>
        <input className={styles.input} type="text" value={filterText} onChange={filterHandler} />
        <button onClick={searchHandler}>Search</button>
      </div>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  doFilter: () => {}
};
