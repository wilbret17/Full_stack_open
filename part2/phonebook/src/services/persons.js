import axios from 'axios'

const baseUrl = 'https://fullstack3-1.onrender.com/api/persons';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
}
const create = (newPerson) => {
  console.log('Creating person:', newPerson);
  return axios
    .post(baseUrl, newPerson)
    .then(response => response.data)
    .catch(error => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data.error);
      } else {
        return Promise.reject('An error occurred while creating the person');
      }
    });
}
const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

const updatePerson = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson).then(response => response.data);
}

export default { getAll, create, deletePerson, updatePerson };
