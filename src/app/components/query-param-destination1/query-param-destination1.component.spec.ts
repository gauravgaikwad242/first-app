import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamDestination1Component } from './query-param-destination1.component';

describe('QueryParamDestination1Component', () => {
  let component: QueryParamDestination1Component;
  let fixture: ComponentFixture<QueryParamDestination1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryParamDestination1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryParamDestination1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
