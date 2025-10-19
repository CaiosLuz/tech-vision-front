import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProduto } from './info-produto';

describe('InfoProduto', () => {
  let component: InfoProduto;
  let fixture: ComponentFixture<InfoProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
