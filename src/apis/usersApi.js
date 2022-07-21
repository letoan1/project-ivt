import axiosClient from '../utils/axiosClient';

export const getAllUser = async (payload) => {
    const { data } = await axiosClient.get('users', { params: { ...payload } });
    return data;
};

export const getUserById = async (id) => {
    const { data } = await axiosClient.get('users', {
        params: { id: id },
    });
    return data;
};

export const getUserByUsername = async (username, password) => {
    const { data } = await axiosClient.get('users', {
        params: { email: `${username}@gmail.com`, password: password },
    });
    return data[0];
};

export const createUser = async (user) => {
    const res = await axiosClient.post('users', {
        ...user,
        email: `${user.email}@gmail.com`,
    });
    return res;
};

export const updateUser = async (id, user) => {
    const res = await axiosClient.put(`users/${id}`, {
        ...user,
        email: `${user.email}@gmail.com`,
    });
    return res;
};

export const deleteUser = async (id) => {
    const res = await axiosClient.delete(`users/${id}`);
    return res;
};
