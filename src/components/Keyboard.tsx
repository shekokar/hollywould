import React from 'react';
import {IonGrid,IonCol, IonRow, IonButton} from '@ionic/react';


export const Keyboard: React.FC = () => {
  const letters = ['QWERTYUIOP','ASDFGHJKL','ZXCVBNM']
  return (
        <IonGrid >
          {[...letters].map(row => <IonRow style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {[...row].map(letter => <IonCol size='auto'>
            <IonButton strong={true} color='tertiary' fill="outline">{letter}</IonButton>
            </IonCol>)}
          </IonRow>)}
        </IonGrid>
  );
};
