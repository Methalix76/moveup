import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPPage } from './perfil-p.page';

describe('PerfilPPage', () => {
  let component: PerfilPPage;
  let fixture: ComponentFixture<PerfilPPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
