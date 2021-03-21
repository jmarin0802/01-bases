import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { AppComponent } from '../app.component';
@NgModule({
    declarations:[
        ContadorComponent //Aca se coloca lo que se necesita, los componentes, se delcara tamien
    
    ],
    exports: [
        ContadorComponent,
    ],
    imports:[
        CommonModule
    ]
})
export class ContadorModule{

}