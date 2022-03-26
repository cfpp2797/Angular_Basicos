import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

 heroes: String[] = ["Spiderman","Batman","Flash"];
 heroeBorrado: String =''
borrarheroe(){
  this.heroeBorrado= this.heroes.shift() || "";
} 

}
