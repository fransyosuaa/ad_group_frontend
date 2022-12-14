import axios from 'axios';
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

export const isEmailFormatPassed = (email) => {
  if (!email.match(mailFormat)) {
    return false;
  }
  return true;
};

export const isIpFormatPassed = (ip) => {
  if (!ip.match(ipFormat)) {
    return false;
  }
  return true;
};

export const validateCreateIpForm = ({ ipAddress, label }) => {
  const error = {};
  if (!isIpFormatPassed(ipAddress)) {
    _.setWith(error, 'ipAddress', 'IP Address is not valid');
  }
  if (label.length < 3) {
    _.setWith(error, 'label', 'Label must be at least 3 characters');
  }
  return error;
};

export const getFullPath = (url) => `http://localhost:5000${url}`;

export const setWithExpiry = (key, value, ttl) => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const doLogout = (email) => {
  const payload = { email };
  axios.post('/api/auth/logout', payload);
};
