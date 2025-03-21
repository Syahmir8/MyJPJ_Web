import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanSamanComponent } from './semakan-saman.component';

describe('SemakanSamanComponent', () => {
  let component: SemakanSamanComponent;
  let fixture: ComponentFixture<SemakanSamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanSamanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanSamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
