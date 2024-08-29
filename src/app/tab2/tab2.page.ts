import { Component } from '@angular/core';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicSharedModule, ExploreContainerComponent],
})
export class Tab2Page {}
