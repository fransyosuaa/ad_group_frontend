import _ from 'lodash';
import { mailFormat } from './constants';

export const validateLogin = ({ email, password }) => {
  const error = {};
  if (!email.match(mailFormat)) {
    _.setWith(error, 'email', 'Email is not valid');
  }
  if (password.length < 10) {
    _.setWith(error, 'password', 'Password must be 10 character minimum');
  }
  return error;
};

export const getFullPath = (url) => `http://localhost:5000${url}`;
