import { useRef, useState } from 'react';
import Loader from '../ui/loader';
import { validateLogin } from '../../utils';
import styles from '../../styles/components/form/registerLogin.module.scss';

const RegisterLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState({});

  const doLogin = async (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    const err = validateLogin(payload);
    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }
    try {
      setIsLoading(true);
      // your code here
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
          <button onClick={doLogin}>{isLogin ? 'Login' : 'Register'}</button>
          <a onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have account, regist here" : 'Have account? Login here'}
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterLogin;
