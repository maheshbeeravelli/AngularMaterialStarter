import { Injectable } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { ReplaySubject, Observable } from 'rxjs';
import { IUserProfile } from './data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new ReplaySubject<IUserProfile>();
  public user$: Observable<IUserProfile> = this.userSubject.asObservable();
  userProfile: IUserProfile;
  constructor(private adalSrvc: MsAdalAngular6Service) {
    this.checkForLogin();
  }
  private setUserProfile(user: IUserProfile) {
    this.userProfile = user;
    console.log(
      'DataService -> setUserProfile -> this.userProfile',
      this.userProfile
    );
    this.userSubject.next(this.userProfile);
  }
  checkForLogin() {
    console.log("AuthService -> checkForLogin -> this.adalSrvc.isAuthenticated", this.adalSrvc.isAuthenticated)
    if (this.adalSrvc.isAuthenticated) {
      console.log(
        'DataService -> checkForLogin -> this.adalSrvc.userInfo.profile',
        this.adalSrvc.userInfo.profile
      );
      this.setUserProfile({
        loggedIn: true,
        name: this.adalSrvc.userInfo.profile.name,
        token: this.adalSrvc.accessToken,
        canAccess: true,
      });
    }
  }
  logoutUser() {
    this.userSubject.next(null);
    this.adalSrvc.logout();
    this.userProfile = null;
  }
}
