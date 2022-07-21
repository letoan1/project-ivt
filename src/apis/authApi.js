import axiosClient from '../utils/axiosClient';

export const logIn = async (username, password) => {
    const { data } = await axiosClient.post('login', {
        email: `${username}@gmail.com`,
        password: password,
    });
    return data;
};
