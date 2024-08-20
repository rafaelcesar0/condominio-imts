import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Apartamentos',
        icon: PrimeIcons.BUILDING,
        routerLink: '/apartamentos',
      },
      {
        label: 'Veiculos',
        icon: PrimeIcons.CAR,
        routerLink: '/veiculos',
      },
    ];
  }
}
