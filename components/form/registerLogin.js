import { useRef, useState } from 'react';
import axios from 'axios';
import Loader from '../ui/loader';
import { setWithExpiry, validateLogin } from '../../utils';
import styles from '../../styles/components/form/registerLogin.module.scss';
import { keyLocalStorage } from '../../constants';

const RegisterLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [modeAuth, setModeAuth] = useState('login');
  const [error, setError] = useState({});

  const changeModeHandler = () => {
    const newMode = modeAuth === 'login' ? 'register' : 'login';
    setModeAuth(newMode);
  };

  const doLogin = async (e) => {
    e.preventDefault();
    setError({});

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    const validatedPayload = validateLogin(payload);
    if (Object.keys(validatedPayload).length > 0) {
      setError(validatedPayload);
      return;
    }
    try {
      setIsLoading(true);
      const resp = await axios.post(`/api/auth?type=${modeAuth}`, payload);
      if (modeAuth === 'register') {
        alert('Registration done! Please login');
      }
      if (modeAuth === 'login') {
        const {
          data: { data: response }
        } = resp;
        setWithExpiry(keyLocalStorage, response, 90 * 60 * 1000); // set 1.5h ttl
        window.location.href = '/ip-management';
      }
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
    <div>
      <form>
        <div className={styles['div-flex']}>
          <label>Email</label>
          <div className={styles['div-column']}>
            <input
              className={error?.email ? styles.error : ''}
              type="email"
              ref={emailRef}
              name="email"
            />
            <span className={styles['error-message']}>{error?.email}</span>
          </div>
        </div>
        <div className={styles['div-flex']}>
          <label>Password</label>
          <div className={styles['div-column']}>
            <input
              className={error?.password ? styles.error : ''}
              type="password"
              ref={passwordRef}
              name="password"
            />
            <span className={styles['error-message']}>{error?.password}</span>
          </div>
        </div>
        <div className={styles['div-flex']}>
          <button onClick={doLogin}>{modeAuth === 'login' ? 'Login' : 'Register'}</button>
          <a onClick={changeModeHandler}>
            {modeAuth === 'login' ? "Don't have account, regist here" : 'Have account? Login here'}
          </a>
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

export default RegisterLogin;
