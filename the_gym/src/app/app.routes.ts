import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GymExcerciseComponent } from './excercise/gym/gym-excercise/gym-excercise.component';

export const routes: Routes = [
    {path:"", component:HomepageComponent},
    {path:"gym", component:GymExcerciseComponent},
    {path:"home_workout", component:HomepageComponent},
];
