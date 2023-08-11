import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitasPacientesComponent } from './listar-citas-pacientes.component';

describe('ListarCitasPacientesComponent', () => {
  let component: ListarCitasPacientesComponent;
  let fixture: ComponentFixture<ListarCitasPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCitasPacientesComponent]
    });
    fixture = TestBed.createComponent(ListarCitasPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
