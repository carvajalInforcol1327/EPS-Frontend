import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcitaComponent } from './dashboardcita.component';

describe('DashboardcitaComponent', () => {
  let component: DashboardcitaComponent;
  let fixture: ComponentFixture<DashboardcitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardcitaComponent]
    });
    fixture = TestBed.createComponent(DashboardcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
