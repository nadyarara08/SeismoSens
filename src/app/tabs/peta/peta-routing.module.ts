import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetaPage } from './peta.page';

const routes: Routes = [
  { path: '', component: PetaPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetaPageRoutingModule {}
