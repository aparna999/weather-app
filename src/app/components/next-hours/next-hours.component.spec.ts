import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHoursComponent } from './next-hours.component';

describe('NextHoursComponent', () => {
  let component: NextHoursComponent;
  let fixture: ComponentFixture<NextHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
