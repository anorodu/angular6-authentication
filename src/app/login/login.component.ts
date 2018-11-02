import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  redirectUrl: string;

  // constructor(private router: Router,
  //             private route: ActivatedRoute,
  //             private authenticationService: AuthenticationService,
  //   private authorizationService: AuthorizationService,
  //   private identityService: IdentityService) {
  //   this.redirectUrl = this.route.snapshot.queryParams['redirectTo'];
  // }

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.redirectUrl = this.route.snapshot.queryParams['redirectTo'];
  }

  ngOnInit(): void {
    console.log('login page ngOnInit');
    // this.identityService.logout();
  }

  register(): void {
    this.router.navigate(['registration']);
  }

  login(): void {
    this.router.navigate(['/dashboard']);
  }

  // login(): void {
  //   this.authenticationService.login(this.username, this.password)
  //     .map(
  //       (result) => {
  //         if (result) {
  //           this.identityService.login(result);
  //           this.navigateAfterSuccess();
  //         } else {
  //           console.log('no error');
  //         }
  //       },
  //       (error) => {
  //         console.log('error:' + error);
  //       },
  //     ).toPromise();
  // }

  navigateAfterSuccess(): void {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/']);
    }
  }

}
