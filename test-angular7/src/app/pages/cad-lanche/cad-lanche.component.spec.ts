import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadLancheComponent } from './cad-lanche.component';

describe('CadLancheComponent', () => {
  let component: CadLancheComponent;
  let fixture: ComponentFixture<CadLancheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadLancheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadLancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
