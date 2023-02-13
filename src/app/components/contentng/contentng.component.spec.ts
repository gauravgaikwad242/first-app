import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentngComponent } from './contentng.component';

describe('ContentngComponent', () => {
  let component: ContentngComponent;
  let fixture: ComponentFixture<ContentngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
