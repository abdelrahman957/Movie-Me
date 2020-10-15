import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private pageTitle:Title) { 
    document.body.style.backgroundColor = '#000';
    pageTitle.setTitle('Movie Me Egypt')
  }

  ngOnInit(): void {
    $('.questions .card-header .card_button').click(function(){
      $(this).children('i').toggleClass('rotate');  
      $(this).parents('.card').siblings('.card').find('i').removeClass('rotate');
    })
    
  }

}
