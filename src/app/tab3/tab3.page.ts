import { Component } from '@angular/core';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicSharedModule, ExploreContainerComponent],
})
export class Tab3Page {}
