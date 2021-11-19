import { Component, OnInit } from '@angular/core';
import { Resignation } from 'src/Models/resignation';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-addresignation',
  templateUrl: './addresignation.component.html',
  styleUrls: ['./addresignation.component.css']
})
export class AddresignationComponent implements OnInit {

  constructor(private _shared:SharedService) { }

  addr:Resignation={
    EmpId:0,
    PhoneNo:0,
    NoticePeriodDate:new Date(),
    NoticePeriod:0,
    ResignationDate:new Date()
  }

  ngOnInit(): void {
  }
  
  loginstatus:number=0;
  addresign(addresig1:Resignation):number
  {
    this.loginstatus=this._shared.postResign(addresig1);
    alert("Employee Added succesfully");
    return this.loginstatus;
  }

}
