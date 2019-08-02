import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TestPageComponent } from './pages/test-page/test-page.component';

import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'test-page',
      component: TestPageComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
