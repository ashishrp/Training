import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Trainer } from 'src/Models/trainer';

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent implements OnInit {

  constructor(private _shared:SharedService) { }

  addt:Trainer={
    TrainerId:0,
    TrainerName:"",
    Address:"",
    City:"",
    Technology:""

  }

  ngOnInit(): void {
  }

  loginstatus:number=0;
  addtra(addtr:Trainer):number
  {
    this.loginstatus=this._shared.postTrainer(addtr);
    alert("Trainer Added succesfully");
    return this.loginstatus;
  }

}
