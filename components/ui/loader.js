import { Circles } from 'react-loader-spinner';
import Portal from '../hoc/portal';
import styles from '../../styles/components/ui/Loader.module.scss';

const CustomLoader = () => {
  return (
    <Portal>
      <div className={styles['black-layer']}>
        <Circles color="#fff" height={80} width={80} />
      </div>
    </Portal>
  );
};

export default CustomLoader;
