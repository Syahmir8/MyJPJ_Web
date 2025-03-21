import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanUtamaComponent } from './paparan-utama.component';

describe('PaparanUtamaComponent', () => {
  let component: PaparanUtamaComponent;
  let fixture: ComponentFixture<PaparanUtamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanUtamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanUtamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
