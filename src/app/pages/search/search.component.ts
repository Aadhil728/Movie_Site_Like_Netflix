import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult:any;

  constructor(private apiService: MovieApiServiceService) {}

  ngOnInit(): void {
    
  }

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    // console.log(this.searchForm.value, 'search');

    this.apiService.getSearchMovie(this.searchForm.value).subscribe((res)=>{
      // console.log(res, 'SearchResults');
      this.searchResult = res.results;
      // this.searchForm.reset();
    })
    
  }

}
