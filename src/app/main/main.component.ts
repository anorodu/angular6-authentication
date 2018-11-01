import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  routes: Object[] = [
    {
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard'
    }
  ];

  constructor(
    // private identityService: IdentityService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    // this.identityService.logout();
    this.router.navigate(['/login']);
  }
}
