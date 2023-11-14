import { camera, trash, close } from 'ionicons/icons';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonActionSheet,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab1.css';

const Tab1: React.FC = () => {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
