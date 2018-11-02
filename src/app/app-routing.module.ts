import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'advocate',
    loadChildren: './modules/advocate/advocate.module#AdvocateModule'
  },
  {
    path: 'partner',
    loadChildren: './modules/partner/partner.module#PartnerModule'
  },
  {
    path: 'patient',
    loadChildren: './modules/patient/patient.module#PatientModule'
  },
  {
    path: 'experts',
    loadChildren: './modules/experts/experts.module#ExpertsModule'
  },
  {
    path: 'patient-list',
    loadChildren: './modules/mutual-list/mutual-list.module#MutualListModule'
  },
  {
    path: 'manage-profile',
    loadChildren: './modules/mutual-manage-profile/manage-profile.module#ManageProfileModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
