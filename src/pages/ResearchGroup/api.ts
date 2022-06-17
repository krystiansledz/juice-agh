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
  return useQuery(`user-${id}`, () => fetchUser(id), RQUERY_NOREFETCH_OPTIONS);
};

const fetchUsers = (): Promise<UserType[]> => {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}/api/extra-users`)
    .then((response) => response.data);
};

export const useUsers = () => {
  return useQuery(`users`, () => fetchUsers(), RQUERY_NOREFETCH_OPTIONS);
};

export const toggleActivated = (id: number) => {
  return axios
    .post(
      `${process.env.REACT_APP_API_HOST}/api/admin/users/${id}/toggleActivated`
    )
    .then((response) => response.data);
};
