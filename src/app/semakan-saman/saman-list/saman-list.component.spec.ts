import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamanListComponent } from './saman-list.component';

describe('SamanListComponent', () => {
  let component: SamanListComponent;
  let fixture: ComponentFixture<SamanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
