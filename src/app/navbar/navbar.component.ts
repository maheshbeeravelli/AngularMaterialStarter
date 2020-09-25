import { IUserProfile } from './../data.interface';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$:Observable<IUserProfile> = this.auth.user$;
  isEmployee: boolean;
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    // this.user$ = this.data.user$;
    this.user$.subscribe(console.log);
  }
  logoutUser() {
    this.auth.logoutUser();
  }
}
