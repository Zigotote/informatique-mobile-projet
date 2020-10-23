import {
  IonButton,
  IonPage,
  IonLoading,
  IonTitle,
  IonTextarea,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useEffect, useState } from "react";
import { setStorage } from "../Services/storageService.module";
import { useParams } from "react-router-dom";
import { getPageValues, getPageValue } from "../Services/storageService.module";
import { getSessions } from "../Services/apiService.module";
import { RouteComponentProps } from "react-router-dom";
import styles from "./NotesPage.module.css";

import Session from "../models/Session";

const NotesPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { id } = useParams();
  const [showLoading, setShowLoading] = useState(true);
  let [session, setSession] = useState<Session>();
  let [note, setNote] = useState<string>();
  useEffect(() => {
    getPageValue("session", id, getSessions, setSession);
    getPageValues("note_" + id, () => {}, setNote).then(() => {
      setShowLoading(false);
      console.log("Couou");
    });
  }, []);

  function saveNote() {
    let dom = document
      .getElementById("notes-area")!
      .getElementsByTagName("textarea")[0];
    if (dom != null) {
      let inputVal = dom.value;
      setNote(inputVal);
      setStorage(inputVal, "note_" + session!.id).then(() => {
        history.push("/session/" + id);
      });
    }
  }

  return (
    <IonPage id="content">
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Please wait..."}
        duration={5000}
      />
      <HeaderComponent title="Mes Notes" />

      <IonTitle>{session && session.title}</IonTitle>

      <IonButton
        expand="full"
        color="primary"
        //routerLink={session && "/session/" + session.id}
        onClick={saveNote}
      >
        Enregister
      </IonButton>

      <IonTextarea
        id="notes-area"
        value={note}
        className={styles["notes"]}
      ></IonTextarea>
    </IonPage>
  );
};

export default NotesPage;
