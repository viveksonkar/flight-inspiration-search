import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/feature/search.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-max-price',
  templateUrl: './max-price.component.html',
  styleUrls: ['./max-price.component.scss']
})
export class MaxPriceComponent implements OnInit {

  sliderValue: string;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    
    return value;
  }

  sliderChanges( matSliderChange: MatSliderChange){
    this.searchService.maxPrice = Math.round(matSliderChange.value / 1000)*1000;
    this.sliderValue = this.searchService.maxPrice + 'K';
  }

}
