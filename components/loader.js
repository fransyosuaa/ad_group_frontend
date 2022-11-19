import Loader from 'react-loader-spinner';
import styles from '../styles/Loader.module.scss';

const CustomLoader = () => {
  return (
    <div className={styles['black-layer']}>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
