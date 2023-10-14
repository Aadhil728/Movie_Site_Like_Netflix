import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  getMovieDetailResults:any;
  getMovieVideoResults:any;
  getMovieCastResults:any;

  constructor(private apiService: MovieApiServiceService, private router: ActivatedRoute){

  }

  ngOnInit(): void {
    let getParamsId = this.router.snapshot.paramMap.get('id');
    // console.log(getParamsId, 'ID');
    this.getMovieDetails(getParamsId);
    this.getMovieVideo(getParamsId);
    this.getMovieCast(getParamsId);
  }

  // getmoviedatails
  getMovieDetails(id:any){
    this.apiService.getMovieDetails(id).subscribe((res)=>{
      // console.log(res, 'getMovieDetails');
      this.getMovieDetailResults = res;
    })
  }

  // getMovieVideo
  getMovieVideo(id:any){
    this.apiService.getMovieVideo(id).subscribe((res)=>{
      // console.log(res, 'movieVideoResult');
      res.results.forEach((element:any) => {
        if(element.type == "Trailer"){
          this.getMovieVideoResults = element.key;
        }
      });
    })
  }

  // getMovieCast
  getMovieCast(id:any){
    this.apiService.getMovieCast(id).subscribe((res)=>{
      // console.log(res, 'movieCastResult');
      this.getMovieCastResults = res.cast;
    })
  }

}
