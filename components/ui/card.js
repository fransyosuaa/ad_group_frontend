import PropTypes from 'prop-types';
import styles from '../../styles/components/ui/card.module.scss';

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
