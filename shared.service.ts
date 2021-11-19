import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Resignation} from '../Models/resignation';
import { Trainer } from 'src/Models/trainer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _url:string='https://localhost:44354/api/';

  constructor(private http:HttpClient) { }
   
  getResignList():Observable<Array<Resignation>>{
    let endpoint:string = 'Resignation/GetResignations';
    return this.http.get<Array<Resignation>>(this._url+endpoint);
  }
  mystatus:number=0;
  postResign(val:any){
    let endpoint:string = 'Resignation/PostResignations';
    this.http.post(this._url+endpoint,val).subscribe((data:any)=>{this.mystatus=data.status}) 
    return this.mystatus;
  }
  getTrainer():Observable<Array<Trainer>>{
    let endpoint:string = 'Trainer/GetTrainer';
    return this.http.get<Array<Trainer>>(this._url+endpoint);
  }
  mystatus1:number=0;
  postTrainer(val:any){
    let endpoint:string = 'Trainer/PostTrainer';
    this.http.post(this._url+endpoint,val).subscribe((data:any)=>{this.mystatus=data.status}) 
    return this.mystatus;
  }
}
