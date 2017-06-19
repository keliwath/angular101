import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portlet2Component } from './portlet2.component';

describe('Portlet2Component', () => {
  let component: Portlet2Component;
  let fixture: ComponentFixture<Portlet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portlet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portlet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
