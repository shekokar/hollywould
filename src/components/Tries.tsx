import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { TryCard } from './TryCard';


interface TriesProps {
    wrongCount:number
  }

export const Tries: React.FC<TriesProps> = ({wrongCount}) => {
    var cols = [];

    if(cols.length === 0){
        for(let i=1;i<=10;i++){
            cols.push(<IonCol key={i} size='auto'>
            <TryCard key={i} wrong={false}/>
        </IonCol>)
        }
    }
    if(wrongCount>0){
        for(let i=0;i<wrongCount;i++){
            cols[i] = <IonCol key={i} size='auto'>
            <TryCard key={i} wrong={true}/>
            </IonCol>
        }
    }

  return (
        <IonGrid style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight:'25px'}} className="ion-align-self-center">
            <IonRow style={{}}>
                {cols}
            </IonRow>
        </IonGrid>
  );
};
