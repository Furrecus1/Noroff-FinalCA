import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    console.log("works");
    this.show = !this.show;

    if(this.show) {
      this.buttonName = "Hide"; 
    } else {
      this.buttonName = "Show";
    }
  }
}
