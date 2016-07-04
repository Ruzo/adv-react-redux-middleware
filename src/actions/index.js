import types from './types';
import axios from 'axios';

export function fetchUsers(){
  const request = axios.get('http://jsonplaceholder.typicode.com/users');
    return {type: types.FETCH_USERS, data: request};
};