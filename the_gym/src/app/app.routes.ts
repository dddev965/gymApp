import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GymExcerciseComponent } from './excercise/gym/gym-excercise/gym-excercise.component';
import { ExcerciseDesignCardComponent } from './designModules/excercise-design-card/excercise-design-card.component';

export const routes: Routes = [
    {path:"", component:HomepageComponent},
    {path:"gym", component:GymExcerciseComponent},
    {path:"home_workout", component:HomepageComponent},
    {path:"excercise-Card/:id", component:ExcerciseDesignCardComponent},
];
