import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemilikanComponent } from './pemilikan.component';

describe('PemilikanComponent', () => {
  let component: PemilikanComponent;
  let fixture: ComponentFixture<PemilikanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PemilikanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemilikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
