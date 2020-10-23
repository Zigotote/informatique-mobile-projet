import {
  IonGrid,
  IonImg,
  IonPage,
  IonLabel,
  IonItem,
  IonRow,
  IonCol,
} from "@ionic/react";
import HeaderComponent from "../components/HeaderComponent";
import React, { useEffect, useState } from "react";
import { Device } from "@capacitor/core";
import LoadingComponent from "../components/LoadingComponent";

interface MyDevice {
  platform: string;
  osVersion: string;
  uuid: string;
  model: string;
  isVirtual: boolean;
}

const AboutMyPhone: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  let [device, setDevice] = useState<MyDevice>();
  useEffect(() => {
    Device.getInfo().then((value) => {
      setDevice(value);
      setShowLoading(false);
    });
  }, []);
  return (
    <IonPage id="content">
      <LoadingComponent
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
      <HeaderComponent title="A propos" />
      {device && (
        <IonGrid>
          <IonRow>
            <IonCol>Plateforme</IonCol>
            <IonCol>{device.platform}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Version</IonCol>
            <IonCol>{device.osVersion}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>UUID</IonCol>
            <IonCol>{device.uuid}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Model</IonCol>
            <IonCol>{device.model}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Connection</IonCol>
            <IonCol>{device.isVirtual ? "3G" : "Wi-Fi"}</IonCol>
          </IonRow>
        </IonGrid>
      )}
    </IonPage>
  );
};

export default AboutMyPhone;
