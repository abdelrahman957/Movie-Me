import {Component} from '@angular/core'
import * as $ from 'jquery';
@Component({
    selector:'app-nav',
    templateUrl:'./NavBar.component.html',
    styleUrls:['./NavBar.component.scss']
})
export class NavBar{
    constructor(){
        let windowVal = 0;
        $(window).on('scroll',function(){
            if ($(window).scrollTop()>windowVal){
                $('nav').addClass('hide');
            }else{$('nav').removeClass('hide');}
            windowVal =  $(window).scrollTop(); 
            if($(window).scrollTop()<=$(window).height()/10){
                $('nav').css({'background-color':'rgba(0,0,0,0.5)'})
            }else{$('nav').css({'background-color':'#000'})}
        });
    }
}