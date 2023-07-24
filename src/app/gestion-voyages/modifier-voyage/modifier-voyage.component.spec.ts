import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVoyageComponent } from './modifier-voyage.component';

describe('ModifierVoyageComponent', () => {
  let component: ModifierVoyageComponent;
  let fixture: ComponentFixture<ModifierVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierVoyageComponent]
    });
    fixture = TestBed.createComponent(ModifierVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
