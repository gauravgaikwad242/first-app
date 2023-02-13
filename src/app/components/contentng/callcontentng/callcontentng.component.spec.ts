import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallcontentngComponent } from './callcontentng.component';

describe('CallcontentngComponent', () => {
  let component: CallcontentngComponent;
  let fixture: ComponentFixture<CallcontentngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallcontentngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallcontentngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
