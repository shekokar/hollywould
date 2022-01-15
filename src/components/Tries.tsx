import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { TryCard } from './TryCard';


export const Tries: React.FC = () => {
  return (
        <IonGrid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <IonRow>
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
                </IonCol>
                <IonCol size='auto'>
                    <TryCard/>
                </IonCol>
            </IonRow>
        </IonGrid>
  );
};
