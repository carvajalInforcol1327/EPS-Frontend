import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardespecialistaComponent } from './dashboardespecialista.component';

describe('DashboardespecialistaComponent', () => {
  let component: DashboardespecialistaComponent;
  let fixture: ComponentFixture<DashboardespecialistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardespecialistaComponent]
    });
    fixture = TestBed.createComponent(DashboardespecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
