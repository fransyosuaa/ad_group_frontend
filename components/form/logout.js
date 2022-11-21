import { useEffect, useState } from 'react';
import Loader from '../ui/loader';
import { keyLocalStorage } from '../../constants';
import { getWithExpiry, doLogout } from '../../utils';

const Logout = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const locStorage = getWithExpiry(keyLocalStorage);
    if (!locStorage) {
      window.location.href = '/';
      return;
    }
    const { email: mail } = locStorage;
    setEmail(mail);
  }, []);

  useEffect(() => {
    if (email !== '') {
      doLogout(email);
      window.location.href = '/';
    }
  }, [email]);

  return <Loader />;
};

export default Logout;
