import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDirectoryDynamicComponent } from './employee-directory-dynamic.component';

describe('EmployeeDirectoryDynamicComponent', () => {
  let component: EmployeeDirectoryDynamicComponent;
  let fixture: ComponentFixture<EmployeeDirectoryDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDirectoryDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDirectoryDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
