import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle,IonItem} from '@ionic/react';

interface TitleCardProps {
    character: string;
  }

export const TitleCard: React.FC<TitleCardProps> = ({character}) => {
  return (
        <IonCard mode="md" style={{width:'50px'}}>
            
      <IonCardHeader style={{textAlign:'center'}}>
      <IonCardTitle>{character}</IonCardTitle></IonCardHeader>
      
        </IonCard>
  );
};
