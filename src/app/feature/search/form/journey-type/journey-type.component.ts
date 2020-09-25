import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { SearchService } from 'src/app/feature/search.service';

@Component({
  selector: 'app-journey-type',
  templateUrl: './journey-type.component.html',
  styleUrls: ['./journey-type.component.scss']
})
export class JourneyTypeComponent implements OnInit {
  
  selected: string = 'return';
  oneWay: boolean = false;
  
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  selectionChange(matSelectChange: MatSelectChange){
    this.oneWay = matSelectChange.value === 'oneway' ? true : false;
    this.searchService.oneWay = this.oneWay;
  }

}
