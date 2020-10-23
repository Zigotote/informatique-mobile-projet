import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterLink,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import SessionListPage from "./pages/SessionListPage";
import NotePage from "./pages/NotesPage";
import SpeakersListPage from "./pages/SpeakersListPage";
import SpeakerPage from "./pages/SpeakerPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import styles from "./App.module.css";
import SessionPage from "./pages/SessionPage";
import AboutMyPhone from "./pages/AboutMyPhone";
const App: React.FC = () => (
  <IonApp>
    <IonMenu side="end" menuId="burger_menu" content-id="content">
      <IonHeader>
        <IonRouterLink routerLink="/home">
          <IonToolbar color="primary">
            <IonTitle>Conférence</IonTitle>
          </IonToolbar>
        </IonRouterLink>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/sessionlist">Sessions</IonItem>
          <IonItem routerLink="/speakerlist">Présentateurs</IonItem>
          <IonItem routerLink="/aboutmyphone">A propos</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/sessionlist" component={SessionListPage} exact={true} />
        <Route path="/session/:id" component={SessionPage} exact={true} />
        <Route path="/speaker/:id" component={SpeakerPage} exact={true} />
        <Route path="/speakerlist" component={SpeakersListPage} exact={true} />
        <Route path="/notesession/:id" component={NotePage} exact={true} />
        <Route path="/aboutmyphone" component={AboutMyPhone} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
