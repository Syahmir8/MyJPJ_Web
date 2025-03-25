import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNegeriComponent } from './detail-negeri.component';

describe('DetailNegeriComponent', () => {
  let component: DetailNegeriComponent;
  let fixture: ComponentFixture<DetailNegeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailNegeriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNegeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
