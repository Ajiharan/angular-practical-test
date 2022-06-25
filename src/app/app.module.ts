import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { MomentModule } from 'ngx-moment';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    UserProfileComponent,
    UserAccountComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 1500 }),
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
