import PropTypes from 'prop-types';
import styles from '../../styles/components/ui/filter.module.scss';

const Filter = ({ placeholder, doFilter, value, textChangeHandler }) => {
  const filterHandler = (e) => {
    textChangeHandler(e.target.value);
  };
  const searchHandler = () => {
    doFilter();
  };

  return (
    <>
      <div>
        <label className={styles.label}>Filter</label>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={filterHandler}
          placeholder={placeholder}
        />
        <button onClick={searchHandler}>Search</button>
      </div>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  doFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textChangeHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
