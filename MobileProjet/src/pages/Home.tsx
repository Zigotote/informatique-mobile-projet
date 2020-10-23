import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useState } from "react";
import styles from "./Home.module.css";
import Schedule from "../models/Schedule";
import axios from "axios";

const Home: React.FC = () => {
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");
  axios
    .get("https://devfest-nantes-2018-api.cleverapps.io/schedule")
    .then((response) => {
      let dates: Array<Schedule> = response.data.sort(
        (a: Schedule, b: Schedule) => a.date < b.date
      );
      setStart(dates[0].dateReadable);
      setEnd(dates[dates.length - 1].dateReadable);
    })
    .catch((err) => console.log(err));
  return (
    <IonPage id="content">
      <HeaderComponent title="Conférence" />

      <IonImg src="assets/maxresdefault.jpg" className={styles["home-img"]} />
      <IonLabel>
        {start} --- {end}
      </IonLabel>
      <IonButton expand="full" color="primary">
        Voir les sessions
      </IonButton>
      <IonButton expand="full" color="primary">
        Voir les présentateurs
      </IonButton>
    </IonPage>
  );
};

export default Home;
