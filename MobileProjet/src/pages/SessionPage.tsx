import {
  IonContent,
  IonImg,
  IonPage,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonAvatar,
  IonText,
  IonButton,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SessionPage.module.css";
import axios from "axios";
import Session from "../models/Session";
import Speaker from "../models/Speaker";
import { getPageValue } from "../Services/storageService.module";
import { getSessions, getSpeakers } from "../Services/apiService.module";
import LoadingComponent from "../components/LoadingComponent";

const SessionPage = () => {
  const { id } = useParams();
  const [showLoading, setShowLoading] = useState(true);
  let [session, setSession] = useState<Session>();
  let [speakers, setSpeakers] = useState<Array<Speaker>>([]);
  let setSessionLoadSpeaker = (newSession: Session) => {
    setSession(newSession);
    if (newSession.speakers) {
      newSession.speakers.forEach((speakerId) => {
        getPageValue("speakers", "" + speakerId, getSpeakers, addSpeaker);
      });
    }
  };
  let addSpeaker = (speaker: Speaker) => {
    setSpeakers((prev) => [speaker, ...prev]);
  };

  useEffect(() => {
    getPageValue("sessions", id, getSessions, setSessionLoadSpeaker).then(
      async () => {
        setShowLoading(false);
      }
    );
  }, []);
  return (
    <IonPage id="content">
      <LoadingComponent
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
      <HeaderComponent title="Sessions" />
      <IonContent fullscreen>
        {session ? (
          <>
            <IonImg
              src={
                session.image
                  ? "https://devfest2018.gdgnantes.com/" + session.image
                  : "assets/Pastille_fusée.png"
              }
            />
            <IonItem>
              <IonTitle>{session.title}</IonTitle>
              <IonLabel>{session.type}</IonLabel>
            </IonItem>
            <IonItem lines="none" class="ion-text-center">
              {session.tags &&
                session.tags.map((tag, index) => {
                  return (
                    <IonText key={index} color="secondary">
                      {tag}{" "}
                    </IonText>
                  );
                })}
            </IonItem>
            <IonLabel className={styles.description}>
              {session.description}
            </IonLabel>
            <IonList>
              {speakers.map((speaker) => {
                return (
                  <IonItem
                    key={speaker.id}
                    routerLink={"/speaker/" + speaker.id}
                  >
                    <IonAvatar className={styles.avatar}>
                      <img
                        src={
                          speaker.photoUrl
                            ? "https://devfest2018.gdgnantes.com/" +
                              speaker.photoUrl
                            : "assets/Pastille_fusée.png"
                        }
                      />
                    </IonAvatar>
                    <IonLabel>{speaker.name}</IonLabel>
                  </IonItem>
                );
              })}
            </IonList>
            <IonButton
              expand="full"
              color="primary"
              routerLink={"/notesession/" + session.id}
            >
              Mes notes
            </IonButton>
          </>
        ) : (
          "no element"
        )}
      </IonContent>
    </IonPage>
  );
};

export default SessionPage;
