import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navbarItems = [
    {
      id: 1,
      title: 'home',
      href: '/',
    },
    {
      id: 1,
      title: 'services',
      href: '/services',
    },
    {
      id: 3,
      title: 'about',
      href: '/about',
    },
  ];

  pathname: string = '';

  getCurrentPathname(path: string) {
    this.pathname = path;
  }
}
