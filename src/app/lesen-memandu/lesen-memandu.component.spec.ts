import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesenMemanduComponent } from './lesen-memandu.component';

describe('LesenMemanduComponent', () => {
  let component: LesenMemanduComponent;
  let fixture: ComponentFixture<LesenMemanduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesenMemanduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesenMemanduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
