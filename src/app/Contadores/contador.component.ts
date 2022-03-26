import { Component } from "@angular/core";



@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>


        <h3><strong>base es 5</strong></h3>


        <button (click)=acumulador(base)>5</button>
        <span>{{numero}}</span>
        <button (click)=acumulador(-base)>-5</button>
    
    `
})
export class ContadorComponent{
    titulo: string = 'Contador APP';
    numero: number = 10;
    base: number = 5;
    acumulador(base: number){
     this.numero += base;
    }
}