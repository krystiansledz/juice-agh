import { BaseUserType, UserType } from "../../models/user.model";
import axios from "axios";
import { useQuery } from "react-query";
import { RQUERY_NOREFETCH_OPTIONS } from "../../rquery";

const fetchUser = (id: number): Promise<UserType> => {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}/api/extra-users/${id}`)
    .then((response) => response.data);
};

export const useUser = (id: number) => {
  return useQuery(`event-${id}`, () => fetchUser(id), RQUERY_NOREFETCH_OPTIONS);
};

const fetchUsers = (): Promise<UserType[]> => {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}/api/extra-users`)
    .then((response) => response.data);
};

export const useUsers = () => {
  return useQuery(`events`, () => fetchUsers(), RQUERY_NOREFETCH_OPTIONS);
};

export const putUser = (data: BaseUserType) => {
  return axios
    .put(`${process.env.REACT_APP_API_HOST}/api/admin/users`, data)
    .then((response) => response.data);
};
