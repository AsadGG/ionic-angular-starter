import { Component } from '@angular/core';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicSharedModule, ExploreContainerComponent],
})
export class Tab1Page {}
