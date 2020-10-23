import axios from "axios";
import { setStorage } from "./storageService.module";
import Schedule from "../models/Schedule";
import { Period } from "../models/Period";

/**
 * Récupère les dates de début et de fin de l'événement
 */
export function getDates(setDates: Function) {
  axios
    .get("https://devfest-nantes-2018-api.cleverapps.io/schedule")
    .then((response) => {
      let dates: Array<Schedule> = response.data.sort(
        (a: Schedule, b: Schedule) => a.date < b.date
      );
      let date = new Period(
        dates[0].dateReadable,
        dates[dates.length - 1].dateReadable
      );
      setDates(date);
      let obj = {
        start: dates[0].dateReadable,
        end: dates[dates.length - 1].dateReadable,
      };
      setStorage(obj, "dates");
    })
    .catch((err) => console.log(err));
}

/**
 * Récupère les sessions
 */
export function getSessions(setSessions: Function, id?: string) {
  axios
    .get("https://devfest-nantes-2018-api.cleverapps.io/sessions")
    .then((response) => {
      setStorage(response.data, "sessions");
      if (id) {
        setSessions(response.data[id]);
      } else {
        setSessions(response.data);
      }
    })
    .catch((err) => console.log(err));
}

/**
 * Récupère les speakers
 */
export function getSpeakers(setSpeakers: Function, id?: string) {
  axios
    .get("https://devfest-nantes-2018-api.cleverapps.io/speakers")
    .then((response) => {
      setStorage(response.data, "speakers");
      if (id) {
        setSpeakers(response.data[id]);
      } else {
        setSpeakers(response.data);
      }
    })
    .catch((err) => console.log(err));
}
