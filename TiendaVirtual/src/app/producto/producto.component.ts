import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:any=[];
  constructor() { }

  ngOnInit(): void {
    const Http = new XMLHttpRequest();

    const url=`http://localhost:4000/productos`;
    Http.open('GET', url, true);
    Http.send();

    
    Http.onload = (e) => {
      var data = JSON.parse(Http.responseText);
      this.productos=data;
      
      for (let i = 0; i < this.productos.length; i++) {
          
        document.querySelectorAll('.precio')[i].innerHTML='$'+ this.productos[i].precio_venta;
        document.querySelectorAll('.desc')[i].innerHTML= this.productos[i].descripcion;
        document.querySelectorAll('.addToCar')[i].id=''+i;
      }
    }
  }

  agregarACarrito(button:any){
    // localStorage.clear();
    if(localStorage.length>2){
      localStorage.setItem('productoSeleccionado',''+localStorage.getItem('productoSeleccionado')+''+button.path[0].id);
    }else{
      localStorage.setItem('productoSeleccionado',`${button.path[0].id}`);
    }

    alert('Se ha agregado un producto a tu carrito de compras.');
    // console.log(button.path[0].id);
    
  }

}
