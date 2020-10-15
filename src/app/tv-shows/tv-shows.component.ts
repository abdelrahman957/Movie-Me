import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  constructor(private pageTitle:Title,private _getData:GetdataService,private _ngxSpinner:NgxSpinnerService) {
    pageTitle.setTitle('Series | Movie Me');
    document.body.style.backgroundColor = "#181818";
    this.putCrimeDataOnVeiw();
    this.putActionDataOnVeiw();
    this.putPicksDataOnVeiw();
    this.putFamilyDataOnVeiw();
    this.putMysteriesDataOnVeiw();
    this.putDocumentariesDataOnVeiw();
    this.putComediesDataOnVeiw();
    this.putDramasDataOnVeiw();
    this.putExcitingDataOnVeiw();
    this.putRomanticDataOnVeiw();
  }

  ngOnInit(): void {
  }

  noOfTvsInSlide:number = 0;
  tvImgPath:string = "https://image.tmdb.org/t/p/w500";
  defaultPoster:string='../../assets/images/defaultImgPoster.jpg';
//===================Crime category==================
  crimeStartFrom:number=0;
  crimeOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.crimeStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  crimeTvs:object[]=[];
  crimepageNo:number=0;
  putCrimeDataOnVeiw(){
    if (this.crimepageNo<10) {
      this._ngxSpinner.show('crime');
      this.crimepageNo++;
      this._getData.getSeries(this.crimepageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.crimeTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('crime');
        })
    }
    this.crimeStartFrom=this.crimeStartFrom+this.noOfTvsInSlide;
    this.crimeOptions.startPosition=this.crimeStartFrom;
  }
  crimePrev(){
    if (this.crimeStartFrom>0) {
      this.crimeStartFrom=this.crimeStartFrom-this.noOfTvsInSlide;
    }
  }
  getLengthOfSlide(event){
    this.noOfTvsInSlide=event.slides.length;
  }

  //===================Action category==================
  actionStartFrom:number=0;
  actionOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.actionStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  actionTvs:object[]=[];
  actionPageNo:number=10;
  putActionDataOnVeiw(){
    if (this.actionPageNo<20) {
      this._ngxSpinner.show('action');
      this.actionPageNo++;
      this._getData.getSeries(this.actionPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.actionTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('action');
        })
    }
    this.actionStartFrom=this.actionStartFrom+this.noOfTvsInSlide;
    this.actionOptions.startPosition=this.actionStartFrom;
  }
  actionPrev(){
    if (this.actionStartFrom>0) {
      this.actionStartFrom=this.actionStartFrom-this.noOfTvsInSlide;
    }
  }

  //===================Picks category==================
  picksStartFrom:number=0;
  picksOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.picksStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  picksTvs:object[]=[];
  picksPageNo:number=20;
  putPicksDataOnVeiw(){
    if (this.picksPageNo<30) {
      this._ngxSpinner.show('picks');
      this.picksPageNo++;
      this._getData.getSeries(this.picksPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.picksTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('picks');
        })
    }
    this.picksStartFrom=this.picksStartFrom+this.noOfTvsInSlide;
    this.picksOptions.startPosition=this.picksStartFrom;
  }
  picksPrev(){
    if (this.picksStartFrom>0) {
      this.picksStartFrom=this.picksStartFrom-this.noOfTvsInSlide;
    }
  }

  //===================Family category==================
  familyStartFrom:number=0;
  familyOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.familyStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  familyTvs:object[]=[];
  familyPageNo:number=30;
  putFamilyDataOnVeiw(){
    if (this.familyPageNo<40) {
      this._ngxSpinner.show('family');
      this.familyPageNo++;
      this._getData.getSeries(this.familyPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.familyTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('family');
        })
    }
    this.familyStartFrom=this.familyStartFrom+this.noOfTvsInSlide;
    this.familyOptions.startPosition=this.familyStartFrom;
  }
  familyPrev(){
    if (this.familyStartFrom>0) {
      this.familyStartFrom=this.familyStartFrom-this.noOfTvsInSlide;
    }
  }

  //===================Mysteries category==================
  mysteriesStartFrom:number=0;
  mysteriesOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.mysteriesStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  mysteriesTvs:object[]=[];
  mysteriesPageNo:number=40;
  putMysteriesDataOnVeiw(){
    if (this.mysteriesPageNo<50) {
      this._ngxSpinner.show('mysteries');
      this.mysteriesPageNo++;
      this._getData.getSeries(this.mysteriesPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.mysteriesTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('mysteries');
        })
    }
    this.mysteriesStartFrom=this.mysteriesStartFrom+this.noOfTvsInSlide;
    this.mysteriesOptions.startPosition=this.mysteriesStartFrom;
  }
  mysteriesPrev(){
    if (this.mysteriesStartFrom>0) {
      this.mysteriesStartFrom=this.mysteriesStartFrom-this.noOfTvsInSlide;
    }
  }

  //===================Documentaries category==================
  documentariesStartFrom:number=0;
  documentariesOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.documentariesStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  documentariesTvs:object[]=[];
  documentariesPageNo:number=50;
  putDocumentariesDataOnVeiw(){
    if (this.documentariesPageNo<60) {
      this._ngxSpinner.show('documentaries');
      this.documentariesPageNo++;
      this._getData.getSeries(this.documentariesPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.documentariesTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('documentaries');
        })
    }
    this.documentariesStartFrom=this.documentariesStartFrom+this.noOfTvsInSlide;
    this.documentariesOptions.startPosition=this.documentariesStartFrom;
  }
  documentariesPrev(){
    if (this.documentariesStartFrom>0) {
      this.documentariesStartFrom=this.documentariesStartFrom-this.noOfTvsInSlide;
    }
  }

  //===================Comedies category==================
  comediesStartFrom:number=0;
  comediesOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.comediesStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  comediesTvs:object[]=[];
  comediesPageNo:number=60;
  putComediesDataOnVeiw(){
    if (this.comediesPageNo<70) {
      this._ngxSpinner.show('comedies');
      this.comediesPageNo++;
      this._getData.getSeries(this.comediesPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.comediesTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('comedies');
        })
    }
    this.comediesStartFrom=this.comediesStartFrom+this.noOfTvsInSlide;
    this.comediesOptions.startPosition=this.comediesStartFrom;
  }
  comediesPrev(){
      if (this.comediesStartFrom>0) {
        this.comediesStartFrom=this.comediesStartFrom-this.noOfTvsInSlide;
      }
    } 

  //===================Dramas category==================
  dramasStartFrom:number=0;
  dramasOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.dramasStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  dramasTvs:object[]=[];
  dramasPageNo:number=70;
  putDramasDataOnVeiw(){
    if (this.dramasPageNo<80) {
      this._ngxSpinner.show('dramas');
      this.dramasPageNo++;
      this._getData.getSeries(this.dramasPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.dramasTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('dramas');
        })
    }
    this.dramasStartFrom=this.dramasStartFrom+this.noOfTvsInSlide;
    this.dramasOptions.startPosition=this.dramasStartFrom;
  }
  dramasPrev(){
      if (this.dramasStartFrom>0) {
        this.dramasStartFrom=this.dramasStartFrom-this.noOfTvsInSlide;
      }
    } 

  //===================Exciting category==================
  excitingStartFrom:number=0;
  excitingOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.excitingStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  excitingTvs:object[]=[];
  excitingPageNo:number=80;
  putExcitingDataOnVeiw(){
    if (this.excitingPageNo<90) {
      this._ngxSpinner.show('exciting');
      this.excitingPageNo++;
      this._getData.getSeries(this.excitingPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.excitingTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('exciting');
        })
    }
    this.excitingStartFrom=this.excitingStartFrom+this.noOfTvsInSlide;
    this.excitingOptions.startPosition=this.excitingStartFrom;
  }
  excitingPrev(){
      if (this.excitingStartFrom>0) {
        this.excitingStartFrom=this.excitingStartFrom-this.noOfTvsInSlide;
      }
    } 

  //===================Romantic category==================
  romanticStartFrom:number=0;
  romanticOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.romanticStartFrom,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    stagePadding:25,
    margin:15,
    nav: false,
    slideBy:5,
  };
  romanticTvs:object[]=[];
  romanticPageNo:number=90;
  putRomanticDataOnVeiw(){
    if (this.romanticPageNo<100) {
      this._ngxSpinner.show('romantic');
      this.romanticPageNo++;
      this._getData.getSeries(this.romanticPageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.romanticTvs.push(data.results[i]);   
            }
            this._ngxSpinner.hide('romantic');
        })
    }
    this.romanticStartFrom=this.romanticStartFrom+this.noOfTvsInSlide;
    this.romanticOptions.startPosition=this.romanticStartFrom;
  }
  romanticPrev(){
      if (this.romanticStartFrom>0) {
        this.romanticStartFrom=this.romanticStartFrom-this.noOfTvsInSlide;
      }
    } 

}
