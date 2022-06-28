import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAddComponent } from './premium-add.component';

describe('PremiumAddComponent', () => {
  let component: PremiumAddComponent;
  let fixture: ComponentFixture<PremiumAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
