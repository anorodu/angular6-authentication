import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  redirectUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    console.log('login page ngOnInit');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.identityService.logout();

    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // this.redirectUrl = this.route.snapshot.queryParams['redirectTo'] || '/';
  }

  // register(): void {
  //   this.router.navigate(['registration']);
  // }

  get f() {return this.loginForm.controls;}

  login(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.redirectUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    //   .map(
    //     (result) => {
    //       if (result) {
    //         this.identityService.login(result);
    //         this.navigateAfterSuccess();
    //       } else {
    //         console.log('no error');
    //       }
    //     },
    //     (error) => {
    //       console.log('error:' + error);
    //     },
    //   ).toPromise();
  }

  // navigateAfterSuccess(): void {
  //   if (this.redirectUrl) {
  //     this.router.navigateByUrl(this.redirectUrl);
  //   } else {
  //     this.router.navigate(['/']);
  //   }
  // }

}
