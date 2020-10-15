import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private pageTitle:Title,private _getData:GetdataService,private _ngxSpinner:NgxSpinnerService) {
    pageTitle.setTitle('Movies | Movie Me');
    document.body.style.backgroundColor = "#181818";
    this.putChildrenDataOnVeiw();
    this.putHorrorDataOnVeiw();
    this.putRomanticDataOnVeiw();
    this.putPopularDataOnVeiw();
    this.putComediesDataOnVeiw();
    this.putFantasyDataOnVeiw();
    this.putActionDataOnVeiw();
    this.putDramasBooksDataOnVeiw();
    this.putDramasRealDataOnVeiw();
    this.putActionComediesDataOnVeiw();
    this.putDramasDataOnVeiw();
    this.putExcitingDataOnVeiw();
   }
   ngOnInit(): void {
    
  }

noOfMoviesInSlide:number = 0;
movieImgPath:string = "https://image.tmdb.org/t/p/w500";
defaultPoster:string='../../assets/images/defaultImgPoster.jpg';
//===================childrens category==================
  childrenStartFrom:number=0;
  childrenOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    startPosition:this.childrenStartFrom,
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
  childrenMovies:object[]=[];
  pageNo:number=0;
  putChildrenDataOnVeiw(){
    if (this.pageNo<10) {
      this._ngxSpinner.show('children');
      this.pageNo++;
      this._getData.getMovies(this.pageNo).subscribe((data)=>{
            for (let i = 0; i < data.results.length; i++) {
              this.childrenMovies.push(data.results[i]);   
            }
            this._ngxSpinner.hide('children');
        })
    }
    this.childrenStartFrom=this.childrenStartFrom+this.noOfMoviesInSlide;
    this.childrenOptions.startPosition=this.childrenStartFrom;
  }
  childrenPrev(){
    if (this.childrenStartFrom>0) {
      this.childrenStartFrom=this.childrenStartFrom-this.noOfMoviesInSlide;
    }
  }
  getLengthOfSlide(event){
    this.noOfMoviesInSlide=event.slides.length;
  }
  
//===================Horror category==================
horrorStartFrom:number=0;
horrorOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  startPosition:this.horrorStartFrom,
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
horrorMovies:object[]=[];
horrorPageNo:number=10;
putHorrorDataOnVeiw(){
  if (this.horrorPageNo<20) {
    this._ngxSpinner.show('horror');
    this.horrorPageNo++;
    this._getData.getMovies(this.horrorPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.horrorMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('horror');
      })
  }
  this.horrorStartFrom=this.horrorStartFrom+this.noOfMoviesInSlide;
  this.horrorOptions.startPosition=this.horrorStartFrom;
}
horrorPrev(){
  if (this.horrorStartFrom>0) {
    this.horrorStartFrom=this.horrorStartFrom-this.noOfMoviesInSlide;
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
romanticMovies:object[]=[];
romanticPageNo:number=20;
putRomanticDataOnVeiw(){
  if (this.romanticPageNo<30) {
    this._ngxSpinner.show('romantic');
    this.romanticPageNo++;
    this._getData.getMovies(this.romanticPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.romanticMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('romantic');
      })
  }
  this.romanticStartFrom=this.romanticStartFrom+this.noOfMoviesInSlide;
  this.romanticOptions.startPosition=this.romanticStartFrom;
}
romanticPrev(){
  if (this.romanticStartFrom>0) {
    this.romanticStartFrom=this.romanticStartFrom-this.noOfMoviesInSlide;
  }
}

//===================Popular category==================
popularStartFrom:number=0;
popularOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  startPosition:this.popularStartFrom,
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
popularMovies:object[]=[];
popularPageNo:number=30;
putPopularDataOnVeiw(){
  if (this.popularPageNo<40) {
    this._ngxSpinner.show('popular');
    this.popularPageNo++;
    this._getData.getMovies(this.popularPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.popularMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('popular');
      })
  }
  this.popularStartFrom=this.popularStartFrom+this.noOfMoviesInSlide;
  this.popularOptions.startPosition=this.popularStartFrom;
}
popularPrev(){
  if (this.popularStartFrom>0) {
    this.popularStartFrom=this.popularStartFrom-this.noOfMoviesInSlide;
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
comediesMovies:object[]=[];
comediesPageNo:number=40;
putComediesDataOnVeiw(){
  if (this.comediesPageNo<50) {
    this._ngxSpinner.show('comedies');
    this.comediesPageNo++;
    this._getData.getMovies(this.comediesPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.comediesMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('comedies');
      })
  }
  this.comediesStartFrom=this.comediesStartFrom+this.noOfMoviesInSlide;
  this.comediesOptions.startPosition=this.comediesStartFrom;
}
comediesPrev(){
  if (this.comediesStartFrom>0) {
    this.comediesStartFrom=this.comediesStartFrom-this.noOfMoviesInSlide;
  }
}

//===================Fantasy category==================
fantasyStartFrom:number=0;
fantasyOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  startPosition:this.fantasyStartFrom,
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
fantasyMovies:object[]=[];
fantasyPageNo:number=50;
putFantasyDataOnVeiw(){
  if (this.fantasyPageNo<60) {
    this._ngxSpinner.show('fantasy');
    this.fantasyPageNo++;
    this._getData.getMovies(this.fantasyPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.fantasyMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('fantasy');
      })
  }
  this.fantasyStartFrom=this.fantasyStartFrom+this.noOfMoviesInSlide;
  this.fantasyOptions.startPosition=this.fantasyStartFrom;
}
fantasyPrev(){
  if (this.fantasyStartFrom>0) {
    this.fantasyStartFrom=this.fantasyStartFrom-this.noOfMoviesInSlide;
  }
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
actionMovies:object[]=[];
actionPageNo:number=60;
putActionDataOnVeiw(){
  if (this.actionPageNo<70) {
    this._ngxSpinner.show('action');
    this.actionPageNo++;
    this._getData.getMovies(this.actionPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.actionMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('action');
      })
  }
  this.actionStartFrom=this.actionStartFrom+this.noOfMoviesInSlide;
  this.actionOptions.startPosition=this.actionStartFrom;
}
actionPrev(){
  if (this.actionStartFrom>0) {
    this.actionStartFrom=this.actionStartFrom-this.noOfMoviesInSlide;
  }
}

//===================Dramas books category==================
dramasBooksStartFrom:number=0;
dramasBooksOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  startPosition:this.dramasBooksStartFrom,
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
dramasBooksMovies:object[]=[];
dramasBooksPageNo:number=70;
putDramasBooksDataOnVeiw(){
  if (this.dramasBooksPageNo<80) {
    this._ngxSpinner.show('dramasBooks');
    this.dramasBooksPageNo++;
    this._getData.getMovies(this.dramasBooksPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.dramasBooksMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('dramasBooks');
      })
  }
  this.dramasBooksStartFrom=this.dramasBooksStartFrom+this.noOfMoviesInSlide;
  this.dramasBooksOptions.startPosition=this.dramasBooksStartFrom;
}
dramasBooksPrev(){
  if (this.dramasBooksStartFrom>0) {
    this.dramasBooksStartFrom=this.dramasBooksStartFrom-this.noOfMoviesInSlide;
  }
}

//===================Dramas real category==================
dramasRealStartFrom:number=0;
dramasRealOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  startPosition:this.dramasRealStartFrom,
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
dramasRealMovies:object[]=[];
dramasRealPageNo:number=80;
putDramasRealDataOnVeiw(){
  if (this.dramasRealPageNo<90) {
    this._ngxSpinner.show('dramasReal');
    this.dramasRealPageNo++;
    this._getData.getMovies(this.dramasRealPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.dramasRealMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('dramasReal');
      })
  }
  this.dramasRealStartFrom=this.dramasRealStartFrom+this.noOfMoviesInSlide;
  this.dramasRealOptions.startPosition=this.dramasRealStartFrom;
}
dramasRealPrev(){
  if (this.dramasRealStartFrom>0) {
    this.dramasRealStartFrom=this.dramasRealStartFrom-this.noOfMoviesInSlide;
  }
}

//===================Action comedies category==================
actionComediesStartFrom:number=0;
actionComediesOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 100,
  startPosition:this.actionComediesStartFrom,
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
actionComediesMovies:object[]=[];
actionComediesPageNo:number=90;
putActionComediesDataOnVeiw(){
  if (this.actionComediesPageNo<100) {
    this._ngxSpinner.show('actionComedies');
    this.actionComediesPageNo++;
    this._getData.getMovies(this.actionComediesPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.actionComediesMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('actionComedies');
      })
  }
  this.actionComediesStartFrom=this.actionComediesStartFrom+this.noOfMoviesInSlide;
  this.actionComediesOptions.startPosition=this.actionComediesStartFrom;
}
actionComediesPrev(){
  if (this.actionComediesStartFrom>0) {
    this.actionComediesStartFrom=this.actionComediesStartFrom-this.noOfMoviesInSlide;
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
dramasMovies:object[]=[];
dramasPageNo:number=100;
putDramasDataOnVeiw(){
  if (this.dramasPageNo<110) {
    this._ngxSpinner.show('dramas');
    this.dramasPageNo++;
    this._getData.getMovies(this.dramasPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.dramasMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('dramas');
      })
  }
  this.dramasStartFrom=this.dramasStartFrom+this.noOfMoviesInSlide;
  this.dramasOptions.startPosition=this.dramasStartFrom;
}
dramasPrev(){
  if (this.dramasStartFrom>0) {
    this.dramasStartFrom=this.dramasStartFrom-this.noOfMoviesInSlide;
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
excitingMovies:object[]=[];
excitingPageNo:number=110;
putExcitingDataOnVeiw(){
  if (this.excitingPageNo<120) {
    this._ngxSpinner.show('exciting');
    this.excitingPageNo++;
    this._getData.getMovies(this.excitingPageNo).subscribe((data)=>{
          for (let i = 0; i < data.results.length; i++) {
            this.excitingMovies.push(data.results[i]);   
          }
          this._ngxSpinner.hide('exciting');
      })
  }
  this.excitingStartFrom=this.excitingStartFrom+this.noOfMoviesInSlide;
  this.excitingOptions.startPosition=this.excitingStartFrom;
}
excitingPrev(){
  if (this.excitingStartFrom>0) {
    this.excitingStartFrom=this.excitingStartFrom-this.noOfMoviesInSlide;
  }
}

}
