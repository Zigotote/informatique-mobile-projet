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
  IonLoading,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useEffect, useState } from "react";
import styles from "./SessionListPage.module.css";
import Session from "../models/Session";
import { getPageValues } from "../Services/storageService.module";
import { getSessions } from "../Services/apiService.module";
import LoadingComponent from "../components/LoadingComponent";

const SessionListPage: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  let [elements, setElements] = useState<Array<Session>>([]);
  useEffect(() => {
    getPageValues("sessions", getSessions, setElements).then(() => {
      setShowLoading(false);
    });
  }, []);

  return (
    <IonPage id="content">
      <LoadingComponent
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
      <HeaderComponent title="Sessions" />
      <IonContent fullscreen>
        <IonList>
          {elements &&
            Object.keys(elements).map((value) => {
              let element: Session = elements[+value];
              return (
                <IonItem key={element.id} routerLink={"/session/" + element.id}>
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
                      {element.titleMobile
                        ? element.titleMobile
                        : element.title}
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
