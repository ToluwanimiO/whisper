import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserProfileComponent } from './logged-user-profile.component';

describe('LoggedUserProfileComponent', () => {
  let component: LoggedUserProfileComponent;
  let fixture: ComponentFixture<LoggedUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
