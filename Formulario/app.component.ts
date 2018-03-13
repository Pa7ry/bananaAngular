import { Component, OnInit } from '@angular/core';
import {Usuario} from "./usuario"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BananaTube';
  usuario:Usuario;
  provincia_usuario=['Álaba','Albacete','Alicante','Almería', 'Ávila','Badajoz','Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','Cuenca','Gerona','Granada','Guadalajara','Guipúzkoa', 'Huelva','Huesca','Islas Baleares','Jaén','La Coruña','La Rioja','Las Palmas','León', 'Lérida','Lugo','Madrid','Málaga', 'Murcia', 'Navarra','Orense', 'Palencia','Pontevedra','Salamanca','Segovia','Sevilla','Soria','Tarragona','Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];
  submitted = false;

  constructor() {
    this.usuario=new Usuario(0,"","","","","","","");
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.usuario);
  }

}
