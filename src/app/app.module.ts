import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';


import { ApartamentosComponent } from './components/apartamentos/apartamentos.component';
import { ApartamentoFormComponent } from './components/apartamento-form/apartamento-form.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { VeiculoFormComponent } from './components/veiculo-form/veiculo-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartamentosComponent,
    ApartamentoFormComponent,
    VeiculosComponent,
    VeiculoFormComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
