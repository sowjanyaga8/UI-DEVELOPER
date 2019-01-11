import { Component, OnInit } from '@angular/core';
import { users } from './users';
import { getMaxListeners } from 'cluster';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){}
  myimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm";
  ngOnInit(){

  }
  btn1(){
    this.myimg='https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg';
  }
  btn2(){
    this.myimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-qKxv_sDOMxYNz_-yYrwElcOVIyj9qusYZ0Nd-4y6QSVMkpi';
  }
  btn3(){
    this.myimg='http://www.heirsearch.com/heirmail/images/2gdcud.jpg';
  }
}

