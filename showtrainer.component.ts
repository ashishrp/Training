import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Trainer } from 'src/Models/trainer';

@Component({
  selector: 'app-showtrainer',
  templateUrl: './showtrainer.component.html',
  styleUrls: ['./showtrainer.component.css']
})
export class ShowtrainerComponent implements OnInit {

  trainerList:Array<Trainer>=[];
  constructor(private _shared:SharedService) { }

  ngOnInit(): void {
    this._shared.getTrainer().subscribe(data=>this.trainerList=data);
    //.getTrainer().subscribe(data=>this.trainerList=data);
  }

}


