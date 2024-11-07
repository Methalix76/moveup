import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarviajePage } from './solicitarviaje.page';

describe('SolicitarviajePage', () => {
  let component: SolicitarviajePage;
  let fixture: ComponentFixture<SolicitarviajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
