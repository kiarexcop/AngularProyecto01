import { Component } from '@angular/core';
import { comentario } from './interfaces/comentario';
import {  disponibilidad } from './interfaces/disponibilidad';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'proyecto01';
  public producto:disponibilidad [ ] = [ ];

  public pro01 : disponibilidad={
    
    tiendas: "Funkomania Odrem",
    cantidad: "3 disponibles",
    direccion: "av.sol 123 alltura del banco credinka",
    ciudad: "cusco"
  };
  public pro02 : disponibilidad={
    
    tiendas: "Funkomania Stras",
    cantidad: "5 disponibles",
    direccion: "san jeronimo 312 4to paradero",
    ciudad: "cusco"
  };
  public pro03 : disponibilidad={
    
    tiendas: "Funkomania Oficial",
    cantidad: "10 disponibles",
    direccion: "ovalo rimac 456",
    ciudad: "lima"
  };

  

  public comentari:comentario=this.comentarioVacio();
  public comentas: comentario[]=[];

  


  comentarioVacio():comentario{
    return{
      opinion: ""

    }
  };
  onDatos():void{
    /*console.log(this.pro01)
    console.log(this.pro02)
    console.log(this.pro03)*/

    this.producto.push(this.pro01)
    this.producto.push(this.pro02)
    this.producto.push(this.pro03)

    console.log(this.comentari)
    this.comentas.push(this.comentari);
    this.comentari = this.comentarioVacio();

  }
  /*onGUardar():void{
    console.log("metodo onGUardar() invocado");

  }*/

  
  /*onDatos2():void{
    
  }*/
  /*onChange(event: Event){
    const elemento = event.target as HTMLInputElement;
    this.comen.comenta = elemento.value;

  }*/
}
