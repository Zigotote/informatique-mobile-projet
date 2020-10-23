import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonButton,
  IonMenuButton,
} from "@ionic/react";
type HeaderProps = {
  title: string;
};
const HeaderComponent = ({ title }: HeaderProps) => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButton slot="end">
          <IonMenuButton></IonMenuButton>
        </IonButton>
      </IonToolbar>
    </IonHeader>
  </>
);

export default HeaderComponent;
