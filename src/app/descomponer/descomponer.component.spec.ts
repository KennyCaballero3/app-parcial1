import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescomponerComponent } from './descomponer.component';

describe('DescomponerComponent', () => {
  let component: DescomponerComponent;
  let fixture: ComponentFixture<DescomponerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescomponerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescomponerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
