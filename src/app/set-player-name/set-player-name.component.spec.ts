import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPlayerNameComponent } from './set-player-name.component';

describe('SetPlayerNameComponent', () => {
  let component: SetPlayerNameComponent;
  let fixture: ComponentFixture<SetPlayerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPlayerNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPlayerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
