import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-row-carrito',
  templateUrl: './row-carrito.component.html',
  styleUrls: ['./row-carrito.component.css']
})
export class RowCarritoComponent {
  productos:any=[];
  cantidadTotal:any=0;
  constructor() { }

  ngOnInit(): void {
    //localStorage.clear();
    const Http = new XMLHttpRequest();
    const url=`http://localhost:4000/productos`;
    Http.open('GET', url, true);
    
    Http.send();

    Http.onload = (e) => {

      if(Http.status==0 || Http.status==404){
        alert('Datos inexistentes');
      }else{

        var data = JSON.parse(Http.responseText);
        
        this.productos= data;

        var productosSeleccionados:any= localStorage.getItem('productoSeleccionado');
        productosSeleccionados= productosSeleccionados.split('');
        

        for (let i = 0; i < productosSeleccionados.length; i++) {
          
          document.querySelectorAll('.descripcionProducto')[i].innerHTML= this.productos[productosSeleccionados[i]].descripcion;
          document.querySelectorAll('.precioProducto')[i].innerHTML= this.productos[productosSeleccionados[i]].precio_venta;
          document.querySelectorAll('.totalProducto')[i].innerHTML= this.productos[productosSeleccionados[i]].precio_venta;
          document.querySelectorAll('.equis')[i].id=''+(productosSeleccionados[i]);
          this.cantidadTotal=(this.productos[productosSeleccionados[i]].precio_venta + this.cantidadTotal);
        }

        var divTotal:any=document.querySelector('.numerototal');
        divTotal.innerHTML= this.cantidadTotal;
        
      }
        
    }

    
  }

  onDelete(produ:any){
    console.dir(produ.children[4].innerHTML);
    
    var localtoReplace:any= localStorage.getItem('productoSeleccionado');
    localtoReplace= localtoReplace.split('');
    const index:any = localtoReplace.findIndex((localtoReplac:any) => localtoReplac === produ.children[5].id);
    var divNumeroTotal:any= document.querySelector('.numerototal');
    divNumeroTotal.innerHTML=divNumeroTotal.innerHTML - produ.children[4].innerHTML;
    produ.remove();
    
    localtoReplace.splice(index, 1);
    localStorage.setItem('productoSeleccionado','');
    for (let i = 0; i < localtoReplace.length; i++) {
      
      localStorage.setItem('productoSeleccionado',localStorage.getItem('productoSeleccionado')+localtoReplace[i]);
    }
    

  }

}
