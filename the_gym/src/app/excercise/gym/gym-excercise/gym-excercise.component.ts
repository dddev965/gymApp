import { Component } from '@angular/core';
import { CardsComponent } from '../../../designModules/cards/cards.component';
import { DataServiceService } from '../../../Modules/data-service.service';
import {Exercise} from '../../../Model/datamodel'
@Component({
  selector: 'app-gym-excercise',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './gym-excercise.component.html',
  styleUrl: './gym-excercise.component.scss'
})
export class GymExcerciseComponent {
  data:Exercise[]=[]
constructor(private http:DataServiceService){
 this.getdata()
}

getdata(){
  this.http.getdata().subscribe(res=>{
    console.log(res);
    this.data= res
  })
}

}
