import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  // a series
  tvId;
  tv;
  imgPath:string;
  dateRelease;
  adultOrNo = "+13";
  duration:string;
  defaultImg:string='../../assets/images/defaultImg.jpg';
  seasonNo = 1;
  indexOfSeason;
  seasonsNos:number[]=[];
  // a series season
  tvSeason;
  seasonEpisodes:any[];
  seasonDate;
  // a series similar
  similarTvs:any[];
  tvImgPath:string="https://image.tmdb.org/t/p/w500";

  soonTvs:any[]=[];

  constructor(private activeroute:ActivatedRoute,private _getData:GetdataService,private pageTitle:Title) {
    this.tvId = activeroute.snapshot.paramMap.get('id');
    this._getData.getSeriesDetails(this.tvId).subscribe((data)=>{
      this.tv=data;
      if (this.tv.seasons[0].season_number==0) {
        this.seasonNo = 0;
      }
      this.getTvInfo(this.tv);
      for (let i = 0; i < this.tv.seasons.length; i++){
        this.seasonsNos.push(i);
      }
      this.changeSeason();
    })
    
    let similarRandomNoPage = Math.ceil(Math.random() * (5 - 1) + 1);
    this._getData.getSimilarMovies('tv',this.tvId,similarRandomNoPage).subscribe((data)=>{
      data.results.splice(12,8);
      this.similarTvs = data.results;
    });
    let soonRandomNoPage = Math.ceil(Math.random() * (10 - 1) + 1);
    this._getData.getUpComingMovies(soonRandomNoPage).subscribe((data)=>{
        data.results.splice(8,12);
        this.soonTvs = data.results;  
    })
   }



   getTvInfo(item){
    this.pageTitle.setTitle(`${item.name} | Movie Me`);
    if (item.backdrop_path){
      this.imgPath=`url(${this.tvImgPath}${item.backdrop_path})`;
    }
    else{this.imgPath=`url(${this.defaultImg})`}
    this.dateRelease = item.first_air_date.substring(0,4);
    this.duration = this.calcDuration(item.episode_run_time[0]);
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

  changeSeason(){
    this._getData.getSeasonOfSeries(this.tvId,this.seasonNo).subscribe((data)=>{
      this.tvSeason = data;
      this.seasonEpisodes = data.episodes;
      this.seasonDate = this.tvSeason.air_date.substring(0,4)
    })
    console.log(this.seasonNo);
  }

  ngOnInit(): void {
  }

}
