import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemmSomosComponent } from './quemm-somos.component';

describe('QuemmSomosComponent', () => {
  let component: QuemmSomosComponent;
  let fixture: ComponentFixture<QuemmSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemmSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemmSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
