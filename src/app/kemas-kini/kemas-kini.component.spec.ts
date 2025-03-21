import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniComponent } from './kemas-kini.component';

describe('KemasKiniComponent', () => {
  let component: KemasKiniComponent;
  let fixture: ComponentFixture<KemasKiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
