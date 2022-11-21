import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../ui/loader';
import styles from '../../styles/components/form/createEditIpLabel.module.scss';
import { getWithExpiry, validateCreateIpForm } from '../../utils';
import { keyLocalStorage } from '../../constants';
import axios from 'axios';

const CreateEditIpLabel = (props) => {
  const { mode, id } = props;
  const [ipAddress, setIpAddress] = useState('');
  const [label, setLabel] = useState('');
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const locStorage = getWithExpiry(keyLocalStorage);
    if (!locStorage) {
      window.location.href = '/';
    }
    const { token: tkn, email: mail } = locStorage;
    setToken(tkn);
    setEmail(mail);
  }, []);

  useEffect(() => {
    if (id && email !== '' && token !== '') {
      const fetchData = async () => {
        setIsLoading(true);
        const resp = await axios.get('/api/ipLabel', {
          headers: {
            'x-access-token': token
          },
          params: { id }
        });

        const {
          data: { data: response }
        } = resp;
        setIpAddress(response.ipAddress);
        setLabel(response.label);
        setIsLoading(false);
      };
      if (mode === 'edit') {
        fetchData();
      }
    }
  }, [id, email, token]);

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      ipAddress,
      label,
      email
    };
    const err = validateCreateIpForm(payload);
    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }
    try {
      setIsLoading(true);
      if (mode === 'create') {
        await axios.post('/api/ipLabel', payload, {
          headers: {
            'x-access-token': token
          }
        });
      } else if (mode === 'edit') {
        await axios.put('/api/ipLabel', payload, {
          headers: {
            'x-access-token': token
          }
        });
      }
      window.location.href = '/ip-management';
    } catch (error) {
      setError({
        api: error?.response?.data?.message || error?.message
      });
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles['div-center']}>
      <form>
        <div className={styles['div-flex']}>
          <label>Ip Address</label>
          <div className={styles['div-column']}>
            <input
              className={error?.ipAddress ? styles.error : ''}
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              name="ipAddress"
              disabled={mode === 'edit'}
            />
            <span className={styles['error-message']}>{error?.ipAddress}</span>
          </div>
        </div>
        <div className={styles['div-flex']}>
          <label>Label</label>
          <div className={styles['div-column']}>
            <input
              className={error?.label ? styles.error : ''}
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              name="label"
            />
            <span className={styles['error-message']}>{error?.label}</span>
          </div>
        </div>
        <div className={styles['div-right']}>
          <button onClick={submit}>Save</button>
        </div>
        {error?.api ? (
          <div className={styles.right}>
            <span className={styles['error-message']}>{error?.api}</span>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default CreateEditIpLabel;

CreateEditIpLabel.propTypes = {
  mode: PropTypes.string.isRequired,
  id: PropTypes.string
};
