import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../types/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {
  @Input() profileData: Partial<IProfile> | null;

  constructor() {
    this.profileData = null;
  }

  getDataKeys(): string[] {
    if (this.profileData) {
      const filterProfile = Object.keys(this.profileData).filter((item) => {
        if (this.getRecords()[item] !== '') {
          return item;
        }
        return;
      });
      return filterProfile;
    }
    return [];
  }

  getRecords(): Record<string, Partial<IProfile>> {
    return this.profileData as Record<string, Partial<IProfile>>;
  }
  ngOnInit(): void {}
}
