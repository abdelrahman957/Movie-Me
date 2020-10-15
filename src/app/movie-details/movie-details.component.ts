import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId:string;
  movie:any;
  imgPath:string;
  dateRelease;
  adultOrNo = "+13";
  duration:string;
  defaultImg:string='../../assets/images/defaultImg.jpg';

  similarMovies:any[];
  movieImgPath:string="https://image.tmdb.org/t/p/w500";

  soonMovies:any[]=[];

  constructor(private pageTitle:Title,private activatedRoute:ActivatedRoute,private _getData:GetdataService) {
    document.body.style.backgroundColor ="#181818";
    this.movieId = activatedRoute.snapshot.paramMap.get('id');
    this._getData.getMovieDetails(this.movieId).subscribe((data)=>{
      this.movie = data;
      this.getItemInfo(this.movie);
    })
    let similarRandomNoPage = Math.ceil(Math.random() * (5 - 1) + 1);
    this._getData.getSimilarMovies('movie',this.movieId,similarRandomNoPage).subscribe((data)=>{
      data.results.splice(12,8);
      this.similarMovies = data.results;
    })
    let soonRandomNoPage = Math.ceil(Math.random() * (10 - 1) + 1);
    this._getData.getUpComingMovies(soonRandomNoPage).subscribe((data)=>{
        data.results.splice(8,12);
        this.soonMovies = data.results;  
    })
   }
  getItemInfo(item){
    this.pageTitle.setTitle(`${item.title} | Movie Me`);
    if (item.backdrop_path){
      this.imgPath=`url(${this.movieImgPath}${item.backdrop_path})`;
    }
    else{this.imgPath=`url(${this.defaultImg})`}
    this.dateRelease = item.release_date.substring(0,4);
    if (item.adult==true) {
      this.adultOrNo="+18";
    }
    this.duration = this.calcDuration(item.runtime);
  }
  calcDuration(time):string{
    let result;
    if (time>60){
      let mns = time/60;
      let hrs = 0;
      while(mns>1){
        hrs++;
        mns=mns-1;
      }
      mns = Math.round(mns*60);
      result = `${hrs}h ${mns}m`;
    }
    else{
      result = time + "m";
    }
    return result;
  }
  ngOnInit(): void {
  }

}
