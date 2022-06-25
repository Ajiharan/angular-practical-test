import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../service/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [LoginComponent],
  //     providers: [
  //       {
  //         provide: AuthService,
  //         useValue: jasmine.createSpyObj('AuthService', ['login']),
  //       },
  //     ],
  //   });
  //   let mockTopToolBarService = TestBed.inject(AuthService);
  //   mockTopToolBarService.login({
  //     password: 'test',
  //     remember: true,
  //     userName: 'test',
  //   });
  // });
});
