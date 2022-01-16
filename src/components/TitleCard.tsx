import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle} from '@ionic/react';

interface TitleCardProps {
    character: string,
    exclude: string[]
  }

export const TitleCard: React.FC<TitleCardProps> = ({character,exclude}) => {
  var color='dark';
  if('AEIOU'.includes(character))
    color='warning'
  else if('1234567890'.includes(character))
    color='secondary'
  
  return (
        <IonCard color={color} mode="md" style={{width:'50px',height:'55px', margin:'auto'}}>
            
      <IonCardHeader style={{textAlign:'center'}}>
      <IonCardTitle>{exclude.includes(character)?character:' '}</IonCardTitle></IonCardHeader>
      
        </IonCard>
  );
};
