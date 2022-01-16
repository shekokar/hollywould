import {TitleCard} from '../components/TitleCard';
import Keyboard from 'react-simple-keyboard';
import { Tries } from '../components/Tries';
import {useEffect, useState } from 'react';
import {Movie,getMovie} from '../data/movies';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonFooter,
  IonAlert,
  IonPopover,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonText
} from '@ionic/react';
import './Home.css';


const Home: React.FC = () => {

  const layout = {
    'default': [
      '1 2 3 4 5 6 7 8 9 0',
      'Q W E R T Y U I O P',
      'A S D F G H J K L',
      'Z X C V B N M'
    ]
  }

  const [exclude,setExclude] = useState<string[]>([]);
  const [wrongCount,setWrongCount] = useState(0);

  const onKeyPress = (event:string) => {
    setExclude([...exclude,event])
    if(!movie.title.includes(event)){
      setWrongCount(wrongCount+1);
    }
    else{
      setCtr(ctr+1)
    }
  }

  const [ctr,setCtr] = useState(0)
  const [movie,setMovie] = useState<Movie>({id:-1,title:''});
  var characterList:string[] = [];
  
  [...movie.title].forEach(character => {
    if('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(character) && !characterList.includes(character))
      characterList.push(character);
  })
  
  const cardVal = (e:string) => {
    if(e===' ')
      return '/';
    else if('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(e))
      return(<TitleCard exclude={exclude} character={e.toString()}/>);
    else
      return e;
  }

  useEffect(()=>{
    var movi = getMovie();
    movi.title = movi.title.toUpperCase();
    setMovie(movi);
  },[])


  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>HollyWould</IonTitle>
        
        <IonButtons slot='primary'><IonButton fill='clear' shape='round' color='primary' id='trigger-button'>Help</IonButton>
          <IonPopover trigger='trigger-button'>
            <IonCard>
          <IonCardHeader>
            <IonCardTitle>How to Play</IonCardTitle>
          </IonCardHeader>

          <IonCardContent> 
            You have 10 tries to guess the movie name. <IonText color='warning'>Yellow</IonText> represents a vowel. <IonText color='secondary'>Blue</IonText> represents a number. Words are separated by /.
      </IonCardContent>
        </IonCard>
            
          </IonPopover></IonButtons>
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              HollyWould
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <br/>
        <Tries wrongCount={wrongCount}/>
        <br/>
        <br/>
        <br/>

        <IonGrid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="ion-align-self-center">
          <IonRow style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="ion-align-items-center">
        {[...movie.title].map(c => 
        <IonCol key={Math.random()} size="auto">
          {cardVal(c)}
          </IonCol>)}
        </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={wrongCount===10}
          onDidDismiss={()=>window.location.reload()}
          header='Tough Luck!'
          subHeader='Tries Exceeded'
          message={`The movie was ${movie.title}`}
        />

        <IonAlert
          isOpen={ctr!==0 && characterList.length===ctr}
          onDidDismiss={()=>window.location.reload()}
          header='Congratulations!!'
          subHeader='You got the Movie'
          message={`The movie was ${movie.title}`}
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
