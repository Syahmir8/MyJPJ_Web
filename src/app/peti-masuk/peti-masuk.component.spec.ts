import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiMasukComponent } from './peti-masuk.component';

describe('PetiMasukComponent', () => {
  let component: PetiMasukComponent;
  let fixture: ComponentFixture<PetiMasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetiMasukComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetiMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
