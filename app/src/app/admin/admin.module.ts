import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbLayoutModule, NbCardModule, NbStepperModule, NbButtonModule } from '@nebular/theme';


import { SharedModule } from '../shared/shared.module';
import { TaskChallengeComponent } from './task-challenge/task-challenge.component';
import { CreateTaskComponent } from './task-challenge/create-task/create-task.component';
import { EditTaskComponent } from './task-challenge/edit-task/edit-task.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbLayoutModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    AdminComponent,
    TaskChallengeComponent,
    CreateTaskComponent,
    EditTaskComponent,
  ],
  entryComponents: [
    CreateTaskComponent, EditTaskComponent,
  ]
})
export class AdminModule {}
