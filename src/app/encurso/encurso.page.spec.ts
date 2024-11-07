import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncursoPage } from './encurso.page';

describe('EncursoPage', () => {
  let component: EncursoPage;
  let fixture: ComponentFixture<EncursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
