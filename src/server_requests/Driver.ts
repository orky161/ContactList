import axios from 'axios';

export const fetchDriversRequest = () => {
  return axios.get(`http://private-05627-frontendnewhire.apiary-mock.com/contact_list`);
};
