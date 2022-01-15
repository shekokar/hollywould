import React from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonItem} from '@ionic/react';

interface TryCardProps {
  wrong:boolean
}

export const TryCard: React.FC<TryCardProps> = ({wrong}) => {
  return (
        <IonCard color={wrong?"danger":"success"} mode="md" style={{width:'100%',height:'100%'}}>
        </IonCard>
  );
};
