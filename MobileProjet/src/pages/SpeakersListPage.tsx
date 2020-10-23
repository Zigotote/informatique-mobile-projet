import {
  IonContent,
  IonPage,
  IonLabel,
  IonList,
  IonItem,
  IonAvatar,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useEffect, useState } from "react";
import styles from "./SessionListPage.module.css";
import Speaker from "../models/Speaker";
import { getPageValues } from "../Services/storageService.module";
import { getSpeakers } from "../Services/apiService.module";
import LoadingComponent from "../components/LoadingComponent";

const SpeakersListPage: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  let [speakers, setSpeakers] = useState<Array<Speaker>>([]);
  useEffect(() => {
    getPageValues("speakers", getSpeakers, setSpeakers).then(() => {
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
        <IonList>
          {speakers &&
            Object.keys(speakers).map((value) => {
              let speaker: Speaker = speakers[+value];
              return (
                <IonItem key={speaker.id} routerLink={"/speaker/" + speaker.id}>
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
      </IonContent>
    </IonPage>
  );
};

export default SpeakersListPage;
