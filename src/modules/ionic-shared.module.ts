import { NgModule } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

const imports = [
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
];

@NgModule({
  imports: [...imports],
  exports: [...imports],
})
export class IonicSharedModule {}
