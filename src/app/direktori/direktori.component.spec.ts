import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirektoriComponent } from './direktori.component';

describe('DirektoriComponent', () => {
  let component: DirektoriComponent;
  let fixture: ComponentFixture<DirektoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirektoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirektoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
