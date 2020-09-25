import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPriceComponent } from './max-price.component';

describe('MaxPriceComponent', () => {
  let component: MaxPriceComponent;
  let fixture: ComponentFixture<MaxPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
