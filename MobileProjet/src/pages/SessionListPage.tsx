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
  IonList,
  IonItem,
  IonAvatar,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useState } from "react";
import styles from "./SessionListPage.module.css";
import axios from "axios";
import Session from "../models/Session";

const SessionListPage: React.FC = () => {
  let [elements, setElements] = useState([]);
  axios
    .get("https://devfest-nantes-2018-api.cleverapps.io/sessions")
    .then((response) => {
      setElements(response.data);
    })
    .catch((err) => console.log(err));
  const items = [];
  return (
    <IonPage id="content">
      <HeaderComponent title="Sessions" />
      <IonContent fullscreen>
        <IonList>
          {Object.keys(elements).map((value) => {
            let element: Session = elements[+value];
            return (
              <IonItem key={element.id}>
                <IonAvatar className={styles["avatar"]}>
                  <img
                    src={
                      element.image
                        ? "https://devfest2018.gdgnantes.com/" + element.image
                        : "assets/Pastille_fusée.png"
                    }
                  />
                </IonAvatar>
                <IonLabel key={element.id}>
                  <h2>
                    {element.titleMobile ? element.titleMobile : element.title}
                  </h2>
                  <h4>{element.description}</h4>
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SessionListPage;
