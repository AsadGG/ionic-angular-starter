import { Component } from '@angular/core';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicSharedModule],
})
export class TabsPage {}
