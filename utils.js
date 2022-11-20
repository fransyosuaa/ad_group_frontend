import _ from 'lodash';
import { mailFormat, ipFormat } from './constants';

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

export const validateCreateIpForm = ({ ip, label }) => {
  const error = {};
  if (!ip.match(ipFormat)) {
    _.setWith(error, 'ip', 'IP Address is not valid');
  }
  if (label.length < 3) {
    _.setWith(error, 'label', 'Label must be at least 3 characters');
  }
  return error;
};

export const getFullPath = (url) => `http://localhost:5000${url}`;
