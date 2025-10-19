import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarLente } from './selecionar-lente';

describe('SelecionarLente', () => {
  let component: SelecionarLente;
  let fixture: ComponentFixture<SelecionarLente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarLente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarLente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
