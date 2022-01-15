import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle,IonItem} from '@ionic/react';

interface TitleCardProps {
    character: string,
    exclude: string[]
  }

export const TitleCard: React.FC<TitleCardProps> = ({character,exclude}) => {
  const color = 'AEIOUQ'.includes(character)?'warning':'dark';
  return (
        <IonCard color={color} mode="md" style={{width:'50px',height:'55px', margin:'auto'}}>
            
      <IonCardHeader style={{textAlign:'center'}}>
      <IonCardTitle>{exclude.includes(character)?character:' '}</IonCardTitle></IonCardHeader>
      
        </IonCard>
  );
};
