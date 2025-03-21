import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembaharuanLesenComponent } from './pembaharuan-lesen.component';

describe('PembaharuanLesenComponent', () => {
  let component: PembaharuanLesenComponent;
  let fixture: ComponentFixture<PembaharuanLesenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PembaharuanLesenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PembaharuanLesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
