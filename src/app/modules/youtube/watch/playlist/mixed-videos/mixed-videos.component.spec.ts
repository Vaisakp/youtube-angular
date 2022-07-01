import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedVideosComponent } from './mixed-videos.component';

describe('MixedVideosComponent', () => {
  let component: MixedVideosComponent;
  let fixture: ComponentFixture<MixedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
