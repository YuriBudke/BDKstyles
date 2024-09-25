import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovprodutoComponent } from './movproduto.component';

describe('MovprodutoComponent', () => {
  let component: MovprodutoComponent;
  let fixture: ComponentFixture<MovprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovprodutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
