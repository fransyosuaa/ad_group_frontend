import PropTypes from 'prop-types';
import styles from '../styles/layout.module.scss';
export const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
