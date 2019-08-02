import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { TaskChallengeComponent } from './task-challenge/task-challenge.component';
import { CreateTaskComponent } from './task-challenge/create-task/create-task.component';
import { EditTaskComponent } from './task-challenge/edit-task/edit-task.component';

const routes: Routes = [
  {
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'Task',
      component: TaskChallengeComponent,
      // children: [
      //   {
      //     path: 'Task',
      //     component: CreateTaskComponent,
      //   },
      //   {
      //     path: 'Task',
      //     component: EditTaskComponent,
      //   },
      // ],
    },
  ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
