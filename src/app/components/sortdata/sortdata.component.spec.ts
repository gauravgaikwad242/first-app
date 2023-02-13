import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortdataComponent } from './sortdata.component';

describe('SortdataComponent', () => {
  let component: SortdataComponent;
  let fixture: ComponentFixture<SortdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
