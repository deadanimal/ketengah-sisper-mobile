import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-notis',
  templateUrl: './notis.page.html',
  styleUrls: ['./notis.page.scss'],
})
export class NotisPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  deleteall = false;

  checkBoxList = [
    {
      title:"title 1",
      date:"22 Dis 2021",
      body:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
      isChecked:false
    },{
      title:"title 2",
      date:"22 Dis 2021",
      body:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
      isChecked:false
    },{
      title:"title 3",
      date:"22 Dis 2021",
      body:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
      isChecked:false
    },{
      title:"title 4",
      date:"22 Dis 2021",
      body:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
      isChecked:false
    },{
      title:"title asd",
      date:"22 Dis 2021",
      body:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ",
      isChecked:false
    }
  ];

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  deletehist(){
    if(this.deleteall == true){
      this.deleteall = false;
    }else{
      this.deleteall = true;
    }
    
  }

  delete() {
    
  }

  checkAll(){
    console.log('test');
  }
}
