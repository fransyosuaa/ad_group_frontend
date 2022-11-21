import axios from 'axios';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { keyLocalStorage } from '../../constants';
import { getWithExpiry, isEmailFormatPassed } from '../../utils';
import Filter from '../ui/filter';
import Loader from '../ui/loader';
import UserLogList from '../ui/userLogList';

const UserLogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [userLogs, setUserLogs] = useState([]);

  useEffect(() => {
    const locStorage = getWithExpiry(keyLocalStorage);
    if (!locStorage) {
      window.location.href = '/';
      return;
    }
    const { token: tkn, type, email: mail } = locStorage;
    setToken(tkn);
    setEmail(mail);
    setUserType(type);
  }, []);

  useEffect(() => {
    if (token !== '' && userType !== '' && email !== '') {
      const fetchData = async () => {
        setIsLoading(true);
        const resp = await axios.get('/api/history/user', {
          headers: {
            'x-access-token': token
          },
          params: {
            page: 1,
            perPage: 1000,
            email: userType === 'user' ? email : undefined
          }
        });

        const {
          data: { data: response }
        } = resp;
        setUserLogs(response);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [token, userType, email]);

  const getUserLogs = async (params) => {
    try {
      setIsLoading(true);
      const resp = await axios.get('/api/history/user', {
        headers: {
          'x-access-token': token
        },
        params: {
          page: 1,
          perPage: 1000,
          ...params
        }
      });

      const {
        data: { data: response }
      } = resp;
      setUserLogs(response);
    } catch (error) {
      console.log({
        api: error?.response?.data?.message || error?.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const doFilter = () => {
    const params = {};
    if (filterText !== '') {
      if (!isEmailFormatPassed(filterText)) {
        return;
      } else {
        _.setWith(params, 'email', filterText);
      }
    }
    getUserLogs(params);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {userType === 'admin' ? (
        <div>
          <Filter
            placeholder="Search by email"
            doFilter={doFilter}
            value={filterText}
            textChangeHandler={setFilterText}
          />
        </div>
      ) : null}
      <UserLogList userLogList={userLogs} />
    </>
  );
};

export default UserLogs;
