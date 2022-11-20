import { Circles } from 'react-loader-spinner';
import styles from '../../styles/components/ui/Loader.module.scss';

const CustomLoader = () => {
  return (
    <div className={styles['black-layer']}>
      <Circles color="#e28743" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
