import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk','Thor','Capitan America'];
  heroesBorrado:string='';
  
  borrarHeroe(){
    console.log('Borrando.....');
    this.heroesBorrado = this.heroes.shift() || '';
  }

}
