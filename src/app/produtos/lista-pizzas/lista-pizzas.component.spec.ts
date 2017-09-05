import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPizzasComponent } from './lista-pizzas.component';

describe('ListaPizzasComponent', () => {
  let component: ListaPizzasComponent;
  let fixture: ComponentFixture<ListaPizzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPizzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
