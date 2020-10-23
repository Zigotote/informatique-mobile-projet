import {
  IonContent,
  IonImg,
  IonPage,
  IonTitle,
  IonLabel,
  IonItem,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SessionPage.module.css";
import Speaker from "../models/Speaker";
import { getPageValue } from "../Services/storageService.module";
import { getSpeakers } from "../Services/apiService.module";
import LoadingComponent from "../components/LoadingComponent";

const SpeakerPage = () => {
  const { id } = useParams();
  const [showLoading, setShowLoading] = useState(true);
  let [speaker, setSpeaker] = useState<Speaker>();

  useEffect(() => {
    getPageValue("speakers", id, getSpeakers, setSpeaker).then(async () => {
      setShowLoading(false);
    });
  }, []);
  return (
    <IonPage id="content">
      <LoadingComponent
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
      <HeaderComponent title="Présentateurs" />
      <IonContent fullscreen>
        {speaker ? (
          <>
            <IonItem>
              <IonTitle>{speaker.name}</IonTitle>
            </IonItem>
            <IonImg
              src={
                speaker.photoUrl
                  ? "https://devfest2018.gdgnantes.com/" + speaker.photoUrl
                  : "assets/Pastille_fusée.png"
              }
            />

            <IonLabel className={styles.description}>
              <h3>Biographie</h3>
              <p>{speaker.shortBio}</p>
            </IonLabel>
          </>
        ) : (
          "no element"
        )}
      </IonContent>
    </IonPage>
  );
};

export default SpeakerPage;
