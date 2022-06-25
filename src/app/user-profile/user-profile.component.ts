import { Component, Input, OnInit } from '@angular/core';
import { User, UserAccount } from '../types/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() userData: User | null;
  @Input() userAccount: UserAccount | null;

  constructor() {
    this.userData = null;
    this.userAccount = null;
  }

  ngOnInit(): void {}
}
