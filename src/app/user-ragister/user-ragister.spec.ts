import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRagister } from './user-ragister';

describe('UserRagister', () => {
  let component: UserRagister;
  let fixture: ComponentFixture<UserRagister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRagister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRagister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
