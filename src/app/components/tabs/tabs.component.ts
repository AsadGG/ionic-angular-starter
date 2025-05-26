import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassNamesDirective } from 'src/app/directives/cn.directive';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';
import { SharedModule } from 'src/modules/shared.module';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonicSharedModule, SharedModule, ClassNamesDirective],
})
export class TabsComponent {
  constructor(private readonly router: Router) {}

  routeIsActive(route: string) {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
