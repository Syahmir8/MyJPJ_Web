import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamanCarouselComponent } from './saman-carousel.component';

describe('SamanCarouselComponent', () => {
  let component: SamanCarouselComponent;
  let fixture: ComponentFixture<SamanCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamanCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamanCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
