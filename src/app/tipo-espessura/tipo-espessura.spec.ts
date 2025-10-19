import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEspessura } from './tipo-espessura';

describe('TipoEspessura', () => {
  let component: TipoEspessura;
  let fixture: ComponentFixture<TipoEspessura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoEspessura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoEspessura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
