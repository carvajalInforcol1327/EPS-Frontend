import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpacienteComponent } from './dashboardpaciente.component';

describe('DashboardpacienteComponent', () => {
  let component: DashboardpacienteComponent;
  let fixture: ComponentFixture<DashboardpacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardpacienteComponent]
    });
    fixture = TestBed.createComponent(DashboardpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
