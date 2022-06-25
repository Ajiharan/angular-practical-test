import {
  User,
  UserAccount,
  userAdditional,
  UserAddress,
} from './../types/user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
import { ProfileService } from '../service/profile.service';
import { IProfile } from '../types/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userData: User | null = null;
  public address: UserAddress | null = null;
  public extra: userAdditional | null = null;
  public account: UserAccount | null = null;

  private subscription: Subscription;

  constructor(
    private profileService: ProfileService,
    private local: LocalStorageService,
    private route: Router
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.profileService.getProfile().subscribe({
      next: (res: IProfile) => {
        const {
          address1,
          address2,
          avatarUrl,
          birthDate,
          city,
          country,
          firstName,
          fullName,
          facebook,
          lastName,
          gender,
          language,
          lastActive,
          location,
          middleName,
          mobileNo,
          phone,
          roleProfileName,
          state,
          timeZone,
          email,
          lastLogin,
          twitter,
          userId,
          username,
          userRole,
          youtube,
          ...rest
        } = res;

        this.userData = {
          avatarUrl,
          birthDate,
          firstName,
          fullName,
          gender,
          language,
          middleName,
          mobileNo,
          lastName,
          phone,
          roleProfileName,
        };
        this.address = {
          address1,
          address2,
          city,
          country,
          location,
          state,
          timeZone,
        };
        this.account = {
          email,
          lastActive,
          lastLogin,
          twitter,
          userId,
          username,
          userRole,
          facebook,
          youtube,
        };
        this.extra = rest;
      },

      error: (err) => {
        this.local.removeToken();
        this.route.navigate(['/login']);
      },
    });
  }

  formatDate(date: string): Date {
    const arr = date.split(' ');
    arr.pop();
    return new Date(arr.join(' '));
  }

  getFilterUserAccount(): Omit<
    UserAccount,
    | 'userId'
    | 'email'
    | 'userRole'
    | 'username'
    | 'youtube'
    | 'twitter'
    | 'facebook'
  > | null {
    if (!this.account) return null;

    const { lastActive, lastLogin } = this.account;

    return {
      lastActive: this.formatDate(lastActive + ''),
      lastLogin: this.formatDate(lastLogin + ''),
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
