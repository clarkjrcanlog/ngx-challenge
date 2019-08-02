import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule } from '@nebular/theme';

import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbLayoutModule } from '@nebular/theme';

import { TestPageComponent } from './pages/test-page/test-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    UserRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbLayoutModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    UserComponent,
    TestPageComponent
  ],
})
export class UserModule {}
