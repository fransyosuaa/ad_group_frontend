import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../../styles/components/ui/ipLabelManagementList.module.scss';

const IpLabelManagementList = ({ ipList }) => {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.table.div}>
          <div>IP Address</div>
          <div>Label</div>
          <div>Action</div>
        </div>

        {ipList.map((ipLabel) => {
          return (
            <div key={ipLabel.id} className={styles['table-child']}>
              <div>{ipLabel.ipAddress}</div>
              <div>{ipLabel.label}</div>
              <div>
                <Link href={`/ip-management/edit/${ipLabel.id}`}>Edit</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IpLabelManagementList;

IpLabelManagementList.propTypes = {
  ipList: PropTypes.array.isRequired
};
