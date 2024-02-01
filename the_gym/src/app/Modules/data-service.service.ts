import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Exercise} from '../Model/datamodel'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private api :HttpClient) { 
   }

 getdata(){
  return this.api.get<Exercise[]>('http://localhost:3000/gym')
 }
}
