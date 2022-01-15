import MessageListItem from '../components/MessageListItem';
import {TitleCard} from '../components/TitleCard';
import { Keyboard } from '../components/Keyboard';
import { Tries } from '../components/Tries';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonGrid,
  IonCol,
  IonRow,
  IonFooter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const movie = 'Shawshank Redemption'.toUpperCase();
  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hollywood</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Hollywood
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m} />)}
        </IonList> */}
        <Tries/>
        <br/>
        <IonGrid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="ion-align-self-center">
          <IonRow style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="ion-align-items-center">
        {[...movie].map(c => 
        <IonCol size="auto">
          {c===' '?'/':<TitleCard character={c.toString()}/>}
          </IonCol>)}
        </IonRow>
        </IonGrid>
        {/* <h1>Hello World</h1> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Keyboard/>
        
      </IonContent>
      
        
      
    </IonPage>
  );
};

export default Home;
