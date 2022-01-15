import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { TryCard } from './TryCard';

interface TriesProps {
    wrongCount:number
  }

export const Tries: React.FC<TriesProps> = ({wrongCount}) => {
    var cols = [];

    if(cols.length === 0){
        for(let i=1;i<=9;i++){
            cols.push(<IonCol size='auto'>
            <TryCard wrong={false}/>
        </IonCol>)
        }
    }
    if(wrongCount>0){
        for(let i=0;i<wrongCount;i++){
            cols[i] = <IonCol size='auto'>
            <TryCard wrong={true}/>
            </IonCol>
        }
    }

  return (
        <IonGrid style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight:'25px'}} className="ion-align-self-center">
            <IonRow style={{}}>
                {cols}
                {/* <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol> */}
            </IonRow>
        </IonGrid>
  );
};
