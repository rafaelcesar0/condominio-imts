import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApartamentosService } from '../../services/api.service';
import { Apartamento } from '../../interface/apartamento.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  router = inject(Router);
  aptos: Apartamento[] = [];

  apartamentosService = inject(ApartamentosService);

  ngOnInit() {
    this.load();
  }

  async load() {
    try {
      this.aptos = await this.apartamentosService.getAll();
    } catch (err) {
      console.error(err);
    }
  }
}
