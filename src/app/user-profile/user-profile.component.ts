import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User, UserAccount } from '../types/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnChanges {
  public loading: boolean;

  @Input() userData: User | null;
  @Input() userAccount: UserAccount | null;

  constructor() {
    this.userData = null;
    this.userAccount = null;
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes['userData'].currentValue);
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
}
