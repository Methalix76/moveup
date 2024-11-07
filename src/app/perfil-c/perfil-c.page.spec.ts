import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilCPage } from './perfil-c.page';

describe('PerfilCPage', () => {
  let component: PerfilCPage;
  let fixture: ComponentFixture<PerfilCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
