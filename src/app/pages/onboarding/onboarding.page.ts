import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClassNamesDirective } from 'src/app/directives/cn.directive';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';
import { SharedModule } from 'src/modules/shared.module';

@Component({
  selector: 'app-onboarding',
  templateUrl: 'onboarding.page.html',
  styleUrls: ['onboarding.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicSharedModule, SharedModule, ClassNamesDirective],
})
export class OnboardingPage {}
