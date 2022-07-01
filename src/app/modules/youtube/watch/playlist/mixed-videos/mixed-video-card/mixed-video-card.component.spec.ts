import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedVideoCardComponent } from './mixed-video-card.component';

describe('MixedVideoCardComponent', () => {
  let component: MixedVideoCardComponent;
  let fixture: ComponentFixture<MixedVideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedVideoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
