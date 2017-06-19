import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portlet1Component } from './portlet1.component';

describe('Portlet1Component', () => {
  let component: Portlet1Component;
  let fixture: ComponentFixture<Portlet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portlet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portlet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
