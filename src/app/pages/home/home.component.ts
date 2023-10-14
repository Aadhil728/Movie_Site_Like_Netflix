import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private apiService: MovieApiServiceService){}

  bannerResults:any = [];
  trendingMovieResult:any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  animationMovieResult:any = [];
  comadyMovieResult:any = [];
  documentaryMovieResult:any = [];
  scienceFictionMovieResult:any = [];
  thrillerMovieResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.adventureMovies();
    this.animationMovies();
    this.comadyMovies();
    this.documentoryMovies();
    this.scienceFictionMovies();
    this.thrillerMovies();
  }

  //bannerData
  bannerData(){
    this.apiService.bannerApiData().subscribe((res)=>{
      // console.log(res,'results');
      this.bannerResults = res.results;
    })
  }

  //trendingMovies
  trendingData(){
    this.apiService.trendingMoviesApiData().subscribe((res)=>{
      // console.log(res,'trendingMovieResults');
      this.trendingMovieResult = res.results;
    })
  }

  //ActionMovies
  actionMovies(){
    this.apiService.fetchActionMovies().subscribe((res)=>{
      // console.log(res,'actionMovieResult');
      this.actionMovieResult = res.results;
    })
  }

  //AdventureMovies
  adventureMovies(){
    this.apiService.fetchAdventureMovies().subscribe((res)=>{
      // console.log(res,'adventureMovieResult');
      this.adventureMovieResult = res.results;
    })
  }

  //animationMovies
  animationMovies(){
    this.apiService.fetchAnimationMovies().subscribe((res)=>{
      // console.log(res,'animationMovieResult');
      this.animationMovieResult = res.results;
    })
  }

  //ComadyMovies
  comadyMovies(){
    this.apiService.fetchComedyMovies().subscribe((res)=>{
      // console.log(res,'comadyMovieResult');
      this.comadyMovieResult = res.results;
    })
  }

  //DocumentoryMovies
  documentoryMovies(){
    this.apiService.fetchDocumentaryMovies().subscribe((res)=>{
      // console.log(res,'documentaryMovieResult');
      this.documentaryMovieResult = res.results;
    })
  }

  //scienceFictionMovies
  scienceFictionMovies(){
    this.apiService.fetchScienceFictionMovies().subscribe((res)=>{
      // console.log(res,'scienceFictionMovies');
      this.scienceFictionMovieResult = res.results;
    })
  }

  //thrillerMovies
  thrillerMovies(){
    this.apiService.fetchThrillerMovies().subscribe((res)=>{
      // console.log(res,'thrillerMovieResult');
      this.thrillerMovieResult = res.results;
    })
  }
}
