import MessageListItem from '../components/MessageListItem';
import {TitleCard} from '../components/TitleCard';
//import { Keyboard } from '../components/Keyboard';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css'
import { Tries } from '../components/Tries';
import { useEffect, useState } from 'react';
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
  IonFooter,
  IonAlert
} from '@ionic/react';
import './Home.css';


const Home: React.FC = () => {

  const layout = {
    'default': [
      'Q W E R T Y U I O P',
      'A S D F G H J K L',
      'Z X C V B N M'
    ]
  }

  const [exclude,setExclude] = useState<string[]>([]);
  const [wrongCount,setWrongCount] = useState(0);

  const onKeyPress = (event:string) => {
    console.log(event)
    setExclude([...exclude,event])
    if(!movie.includes(event)){
      setWrongCount(wrongCount+1);
    }
    else{
      setCtr(ctr+1)
    }
  }

  const movie = 'Shawshank Redemption'.toUpperCase();
  const [messages, setMessages] = useState<Message[]>([]);
  const [ctr,setCtr] = useState(0)
  var characterList:string[] = [];
  
  [...movie].map(character => {
    if(character!=' ' && !characterList.includes(character))
      characterList.push(character);
  })
  

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
        <br/>
        <Tries wrongCount={wrongCount}/>
        <br/>
        <br/>
        <br/>

        <IonGrid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="ion-align-self-center">
          <IonRow style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="ion-align-items-center">
        {[...movie].map(c => 
        <IonCol size="auto">
          {c===' '?'/':<TitleCard exclude={exclude} character={c.toString()}/>}
          </IonCol>)}
        </IonRow>
        </IonGrid>
        {/* <h1>Hello World</h1> */}
        <IonAlert
          isOpen={wrongCount===9}
          onDidDismiss={()=>window.location.reload()}
          header='Tough Luck!'
          subHeader='Tries Exceeded'
          message={`The movie was ${movie}`}
        />

        <IonAlert
          isOpen={characterList.length===ctr}
          onDidDismiss={()=>window.location.reload()}
          header='Congratulations!!'
          subHeader='You got the Movie'
          message={`The movie was ${movie}`}
        />
               
      </IonContent>
      <IonFooter>
      <div  style={{padding:'5px',margin:'auto',maxWidth:'885px'}}>
        <Keyboard excludeFromLayout={{default:exclude}} className='hg-theme-default' layout={layout} onKeyPress={onKeyPress}
  /></div>
      </IonFooter>
        
      
    </IonPage>
  );
};

export default Home;
