import axiosWithAuth from './axiosWithAuth';

//Fetching Data from the API ----------------------------------
export const axiosFetchColors = () => {
    return(
    axiosWithAuth()
    .get('api/colors')
    .then(res => res))
};