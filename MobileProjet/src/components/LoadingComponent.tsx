import React from "react";
import { IonLoading } from "@ionic/react";

type HeaderProps = {
  showLoading: boolean;
  setShowLoading: Function;
};

const LoadingComponent = ({ showLoading, setShowLoading }: HeaderProps) => (
  <>
    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={"Please wait..."}
      duration={5000}
    />
  </>
);

export default LoadingComponent;
