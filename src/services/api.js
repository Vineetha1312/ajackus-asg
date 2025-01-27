import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => axios.get(`${API_BASE_URL}/users`);
export const addUser = (user) => axios.post(`${API_BASE_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_BASE_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`);
