import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitasTodasComponent } from './listar-citas-todas.component';

describe('ListarCitasTodasComponent', () => {
  let component: ListarCitasTodasComponent;
  let fixture: ComponentFixture<ListarCitasTodasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCitasTodasComponent]
    });
    fixture = TestBed.createComponent(ListarCitasTodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
