import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAnexarReceita } from './detalhe-anexar-receita';

describe('DetalheAnexarReceita', () => {
  let component: DetalheAnexarReceita;
  let fixture: ComponentFixture<DetalheAnexarReceita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheAnexarReceita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheAnexarReceita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
