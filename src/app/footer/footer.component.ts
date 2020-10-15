import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  flag:boolean=true;
  test(){
    if (this.flag){
      this.flag=false;
    }else{this.flag=true}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
