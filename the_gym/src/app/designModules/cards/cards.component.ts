import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import{Exercise} from '../../Model/datamodel'
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule,RouterModule,NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
@Input() gymdata:Exercise[]=[]
constructor(){
// console.log(this.gymdata);

}
}
