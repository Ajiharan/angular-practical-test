import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';
import { User, UserAccount } from '../types/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnChanges {
  public loading: boolean;

  @Input() userData: User | null;
  @Input() userAccount: Partial<UserAccount> | null;

  constructor(
    private local: LocalStorageService,
    private route: Router,
    private auth: AuthService
  ) {
    this.userData = null;
    this.userAccount = null;
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['userData'].currentValue &&
      changes['userAccount'].currentValue
    ) {
      this.loading = false;
    }
  }

  getUserDetails(): Omit<User, 'fullName' | 'avatarUrl'> | null {
    if (this.userData) {
      const { fullName, avatarUrl, ...rest } = this.userData;
      return rest;
    }
    return null;
  }

  ngOnInit(): void {}

  logout(): void {
    this.local.removeToken();
    this.auth.tokenSubject.next(null);
    this.route.navigate(['/login']);
  }
}
