import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarEspessura } from './selecionar-espessura';

describe('SelecionarEspessura', () => {
  let component: SelecionarEspessura;
  let fixture: ComponentFixture<SelecionarEspessura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarEspessura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarEspessura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
