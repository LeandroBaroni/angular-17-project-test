import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCounterComponent } from './set-counter.component';

describe('SetCounterComponent', () => {
  let component: SetCounterComponent;
  let fixture: ComponentFixture<SetCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
