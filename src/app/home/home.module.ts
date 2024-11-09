import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ExperienciaLaboralComponent } from '../componentes/experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../componentes/certificaciones/certificaciones.component';
import { MisDatosComponent } from '../componentes/mis-datos/mis-datos.component';
import { UsuariosfirebaseComponent } from '../componentes/usuariosfirebase/usuariosfirebase.component';
import { ApiRestComponent } from '../componentes/api-rest/api-rest.component';
import { QrScannerComponent } from '../componentes/qr-scanner/qr-scanner.component';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ExperienciaLaboralComponent,
    CertificacionesComponent,
    MisDatosComponent,
    UsuariosfirebaseComponent,
    ApiRestComponent,
    QrScannerComponent
  ]
})
export class HomePageModule {}
