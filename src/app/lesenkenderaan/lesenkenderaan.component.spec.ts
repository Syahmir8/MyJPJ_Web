import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenkenderaanComponent } from './lesenkenderaan.component';

describe('LesenkenderaanComponent', () => {
  let component: LesenkenderaanComponent;
  let fixture: ComponentFixture<LesenkenderaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenkenderaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenkenderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
