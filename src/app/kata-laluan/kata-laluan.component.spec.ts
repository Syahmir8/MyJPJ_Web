import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KataLaluanComponent } from './kata-laluan.component';

describe('KataLaluanComponent', () => {
  let component: KataLaluanComponent;
  let fixture: ComponentFixture<KataLaluanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KataLaluanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KataLaluanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
