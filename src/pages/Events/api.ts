import { EventType } from "../../models/calendarEvent.model";
import axios from "axios";
import { useQuery } from "react-query";
import { RQUERY_NOREFETCH_OPTIONS } from "../../rquery";

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
