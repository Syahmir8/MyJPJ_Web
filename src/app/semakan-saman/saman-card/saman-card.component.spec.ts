import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamanCardComponent } from './saman-card.component';

describe('SamanCardComponent', () => {
  let component: SamanCardComponent;
  let fixture: ComponentFixture<SamanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
