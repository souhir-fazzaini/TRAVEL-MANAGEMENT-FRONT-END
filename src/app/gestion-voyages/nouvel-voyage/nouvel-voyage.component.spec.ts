import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelVoyageComponent } from './nouvel-voyage.component';

describe('NouvelVoyageComponent', () => {
  let component: NouvelVoyageComponent;
  let fixture: ComponentFixture<NouvelVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelVoyageComponent]
    });
    fixture = TestBed.createComponent(NouvelVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
