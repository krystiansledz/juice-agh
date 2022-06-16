import { EventType } from "../../models/calendarEvent.model";
import axios from "axios";
import { useQuery } from "react-query";
import { RQUERY_NOREFETCH_OPTIONS } from "../../rquery";
import { defaultValues, EventFieldValues } from "./details/schema";
import React from "react";
import { AuthContext } from "../../auth/provider";
import { BaseUserType } from "../../models/user.model";

const fetchEvent = (id: number): Promise<EventType> => {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}/api/calendar-events/${id}`)
    .then((response) => response.data);
};

export const useEvent = (id: number) => {
  return useQuery(
    `event-${id}`,
    () => fetchEvent(id),
    RQUERY_NOREFETCH_OPTIONS
  );
};

const fetchEvents = (): Promise<EventType[]> => {
  return axios
    .get(`${process.env.REACT_APP_API_HOST}/api/calendar-events`)
    .then((response) => response.data);
};

export const useEvents = () => {
  return useQuery(`events`, () => fetchEvents(), RQUERY_NOREFETCH_OPTIONS);
};

export const postEvent = (user: BaseUserType, data: EventFieldValues) => {
  return axios
    .post(`${process.env.REACT_APP_API_HOST}/api/calendar-events`, {
      ...defaultValues,
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      publicationDate: new Date(data.publicationDate).toISOString(),
      user: { id: user.id, login: user.login },
    })
    .then((response) => response.data);
};

export const putEvent = (id: number, data: EventFieldValues) => {
  return axios
    .put(`${process.env.REACT_APP_API_HOST}/api/calendar-events/${id}`, {
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      publicationDate: new Date(data.publicationDate).toISOString(),
    })
    .then((response) => response.data);
};

export const deleteEvent = (id: number) => {
  return axios
    .delete(`${process.env.REACT_APP_API_HOST}/api/calendar-events/${id}`)
    .then((response) => response.data);
};
