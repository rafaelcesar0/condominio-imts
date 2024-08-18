import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  items: MenuItem[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Apartamentos',
        icon: PrimeIcons.BUILDING,
        routerLink: '/apartamentos',
        command: () => this.updateActiveItem('/apartamentos'),
      },
      {
        label: 'Veiculos',
        icon: PrimeIcons.CAR,
        routerLink: '/veiculos',
        command: () => this.updateActiveItem('/veiculos'),
      },
    ];

    this.updateActiveItem(this.router.url);
  }

  updateActiveItem(url: string) {
    this.items.forEach((item) => {
      if (item.routerLink === url) {
        item.styleClass = 'active-menu-item';
      } else {
        item.styleClass = '';
      }
    });
  }
}
