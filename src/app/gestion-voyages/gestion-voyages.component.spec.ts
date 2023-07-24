import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVoyagesComponent } from './gestion-voyages.component';

describe('GestionVoyagesComponent', () => {
  let component: GestionVoyagesComponent;
  let fixture: ComponentFixture<GestionVoyagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionVoyagesComponent]
    });
    fixture = TestBed.createComponent(GestionVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
