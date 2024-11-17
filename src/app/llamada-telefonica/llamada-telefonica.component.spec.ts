import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadaTelefonicaComponent } from './llamada-telefonica.component';

describe('LlamadaTelefonicaComponent', () => {
  let component: LlamadaTelefonicaComponent;
  let fixture: ComponentFixture<LlamadaTelefonicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlamadaTelefonicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamadaTelefonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
