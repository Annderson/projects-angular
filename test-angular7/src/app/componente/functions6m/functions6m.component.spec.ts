import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Functions6mComponent } from './functions6m.component';

describe('Functions6mComponent', () => {
  let component: Functions6mComponent;
  let fixture: ComponentFixture<Functions6mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Functions6mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Functions6mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
