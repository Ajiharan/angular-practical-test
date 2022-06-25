import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IProfile } from '../types/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit, OnChanges {
  public loading: boolean;
  @Input() profileData: Partial<IProfile> | null;

  constructor() {
    this.profileData = null;
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profileData'].currentValue) {
      this.loading = false;
    }
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

  isDate(item: string): boolean {
    if (!(this.getRecords()[item] instanceof Date)) return false;

    return true;
  }

  convertDate(item: any): Date {
    return item as Date;
  }

  convertIcon(item: any): string {
    if (typeof item === 'boolean') {
      return item ? '✔️' : '❌';
    }
    return item;
  }
  ngOnInit(): void {}
}
