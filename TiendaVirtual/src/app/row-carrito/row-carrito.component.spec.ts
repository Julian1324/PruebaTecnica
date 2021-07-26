import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCarritoComponent } from './row-carrito.component';

describe('RowCarritoComponent', () => {
  let component: RowCarritoComponent;
  let fixture: ComponentFixture<RowCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
