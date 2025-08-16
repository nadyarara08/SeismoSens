import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerangkatPage } from './perangkat.page';

describe('PerangkatPage', () => {
  let component: PerangkatPage;
  let fixture: ComponentFixture<PerangkatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerangkatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
