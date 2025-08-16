import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetaPage } from './peta.page';

describe('PetaPage', () => {
  let component: PetaPage;
  let fixture: ComponentFixture<PetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
