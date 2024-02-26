import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Exercise} from '../Model/datamodel'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // configUrl = 'assets/db.json';
  configUrl ='https://gym-app-46fea-default-rtdb.firebaseio.com/gym.json'
  apiData = new Subject<any>();
  constructor(private http :HttpClient) { 
   }
data =''
 getdata(){
  // return this.api.get<Exercise[]>('http://localhost:3000/gym')
  return this.http.get<Exercise[]>(this.configUrl)
  // .subscribe(res=>{
  //   console.log(res);
  //   this.apiData.next(res)
    
  // })
 }
}


