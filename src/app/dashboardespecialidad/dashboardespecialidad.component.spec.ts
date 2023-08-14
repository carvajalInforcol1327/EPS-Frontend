import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardespecialidadComponent } from './dashboardespecialidad.component';

describe('DashboardespecialidadComponent', () => {
  let component: DashboardespecialidadComponent;
  let fixture: ComponentFixture<DashboardespecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardespecialidadComponent]
    });
    fixture = TestBed.createComponent(DashboardespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
