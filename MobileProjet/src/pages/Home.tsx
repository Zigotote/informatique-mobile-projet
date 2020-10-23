import { IonButton, IonImg, IonPage, IonLabel, IonItem } from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { getPageValues } from "../Services/storageService.module";
import { getDates } from "../Services/apiService.module";
import { Period } from "../models/Period";
import LoadingComponent from "../components/LoadingComponent";

const Home: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  let [dates, setDates] = useState<Period>(new Period("", ""));
  useEffect(() => {
    getPageValues("dates", getDates, setDates).then(() => {
      setShowLoading(false);
    });
  }, []);

  return (
    <IonPage id="content">
      <LoadingComponent
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
      <HeaderComponent title="Conférence" />

      <IonImg src="assets/maxresdefault.jpg" className={styles["home-img"]} />
      <IonItem>
        <IonLabel class="ion-text-center">
          <h1>Conférence</h1>
          {dates && (
            <p>
              {dates.start} - {dates.end}
            </p>
          )}
        </IonLabel>
      </IonItem>
      <IonButton expand="full" color="primary" routerLink="/sessionlist">
        Voir les sessions
      </IonButton>
      <IonButton expand="full" color="primary" routerLink="/speakerlist">
        Voir les présentateurs
      </IonButton>
    </IonPage>
  );
};

export default Home;
