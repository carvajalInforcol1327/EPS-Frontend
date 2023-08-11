import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEspecialidadComponent } from './registrar-especialidad.component';

describe('RegistrarEspecialidadComponent', () => {
  let component: RegistrarEspecialidadComponent;
  let fixture: ComponentFixture<RegistrarEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEspecialidadComponent]
    });
    fixture = TestBed.createComponent(RegistrarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
