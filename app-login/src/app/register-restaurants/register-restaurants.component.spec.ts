import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRestaurantsComponent } from './register-restaurants.component';

describe('RegisterRestaurantsComponent', () => {
  let component: RegisterRestaurantsComponent;
  let fixture: ComponentFixture<RegisterRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
