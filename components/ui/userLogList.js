import PropTypes from 'prop-types';
import styles from '../../styles/components/ui/userLogList.module.scss';

const UserLogList = ({ userLogList }) => {
  return (
    <>
      <div className={styles.fullwidth}>
        <div className={styles.table}>
          <div>Email</div>
          <div>Action</div>
          <div>Created At</div>
        </div>

        {userLogList.map((log) => {
          return (
            <div key={log.id} className={styles['table-child']}>
              <div>{log.email}</div>
              <div className={styles.center}>{log.action}</div>
              <div>{log.createdAt}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserLogList;

UserLogList.propTypes = {
  userLogList: PropTypes.array.isRequired
};
