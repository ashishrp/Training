import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Resignation } from 'src/Models/resignation';


@Component({
  selector: 'app-resignation',
  templateUrl: './resignation.component.html',
  styleUrls: ['./resignation.component.css']
})
export class ResignationComponent implements OnInit {

  resignationList:Array<Resignation>=[];
  

  constructor( private _shared:SharedService) {}

  ngOnInit(): void {
    this._shared.getResignList().subscribe(data=>this.resignationList=data);
  }

}
