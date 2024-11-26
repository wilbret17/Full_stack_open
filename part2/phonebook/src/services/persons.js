import axios from 'axios'

const baseUrl = 'https://fullstack3-gahg.onrender.com/api/persons';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(response => response.data);
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

const updatePerson = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson).then(response => response.data);
}

export default { getAll, create, deletePerson, updatePerson };
