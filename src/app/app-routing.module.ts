import { Interpolation } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AppsComponent } from './apps/apps.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ExtraServicesComponent } from './extra-services/extra-services.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';

const routes: Routes =[
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"interpolation",component:InterpolationComponent},
    {path:"event binding",component:EventBindingComponent},
    {path:"apps",component:AppsComponent},
    {path:"Extra services",component:ExtraServicesComponent},
    {path:"vehicle summary",component:VehicleSummaryComponent},
    {path:"accounts",component:AccountsComponent},
    {path:"flipkart",component:FlipkartComponent},
    {path:"create vehicle",component:CreateVehicleComponent},
    {path:"create Acc",component:CreateAccComponent},
    

  ]
},
  
    {path:"**",component:PagenotfoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
