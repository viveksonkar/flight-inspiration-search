import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyTypeComponent } from './journey-type.component';

describe('JourneyTypeComponent', () => {
  let component: JourneyTypeComponent;
  let fixture: ComponentFixture<JourneyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
