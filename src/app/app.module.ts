import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { ApartamentosComponent } from './shared/components/apartamentos/apartamentos.component';
import { ApartamentoFormComponent } from './shared/components/apartamento-form/apartamento-form.component';
import { VeiculosComponent } from './shared/components/veiculos/veiculos.component';
import { VeiculoFormComponent } from './shared/components/veiculo-form/veiculo-form.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartamentosComponent,
    ApartamentoFormComponent,
    VeiculosComponent,
    VeiculoFormComponent,
    NavBarComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
