import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    alias: string ='Iron Man';
    name: string = 'Tony Stark';
    edad: number=45;

    get nombreCapitalizado(){
        return this.name.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.name} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.name= 'Spiderman';
    }
    
    cambiarEdad():void{
        this.edad = 30;
    }
}