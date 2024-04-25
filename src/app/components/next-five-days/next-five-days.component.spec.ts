import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFiveDaysComponent } from './next-five-days.component';

describe('NextFiveDaysComponent', () => {
  let component: NextFiveDaysComponent;
  let fixture: ComponentFixture<NextFiveDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextFiveDaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextFiveDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
