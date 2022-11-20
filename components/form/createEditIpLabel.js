import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../ui/loader';
import styles from '../../styles/components/form/createEditIpLabel.module.scss';
import { validateCreateIpForm } from '../../utils';

const CreateEditIpLabel = (props) => {
  const { mode } = props;
  const ipRef = useRef();
  const labelRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      ip: ipRef.current.value,
      label: labelRef.current.value
    };
    const err = validateCreateIpForm(payload);
    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }
    try {
      setIsLoading(true);
      if (mode === 'create') {
        // do create
      } else if (mode === 'edit') {
        // do edit
      }
      window.location.href = '/ip-management';
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <form>
        <div className={styles['div-flex']}>
          <label>Ip Address</label>
          <div className={styles['div-column']}>
            <input className={error?.ip ? styles.error : ''} type="text" ref={ipRef} name="ip" />
            <span className={styles['error-message']}>{error?.ip}</span>
          </div>
        </div>
        <div className={styles['div-flex']}>
          <label>Label</label>
          <div className={styles['div-column']}>
            <input
              className={error?.label ? styles.error : ''}
              type="text"
              ref={labelRef}
              name="label"
            />
            <span className={styles['error-message']}>{error?.label}</span>
          </div>
        </div>
        <div className={styles['div-right']}>
          <button onClick={submit}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditIpLabel;

CreateEditIpLabel.propTypes = {
  mode: PropTypes.string.isRequired
};
