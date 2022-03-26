import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})

export class HeroeComponent{

    Nombre: String = 'El tetas'
    Edad: Number = 30

    ObtenerNombre(): String{
        return `${ this.Nombre } - ${ this.Edad }`;
    }

    get NombreCapitalizado(){

        return this.Nombre.toUpperCase();
    }

    CambiarNombre(): void{
        this.Nombre = "El pezones";
    }
    CambiarEdad(): void{
        this.Edad = 28;
    }

}

