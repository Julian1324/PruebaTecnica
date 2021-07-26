import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  numeroProductos:any=[];
  constructor() { }

  ngOnInit(): void {
    const Http = new XMLHttpRequest();

    const url=`http://localhost:4000/productos`;
    Http.open('GET', url, true);
    Http.send();

    
    Http.onload = (e) => {
      var data = JSON.parse(Http.responseText);
      this.numeroProductos= data;
      console.log(this.numeroProductos);
      
    }
    
  }

  // agregarACarrito(id:number){
  //   //localStorage.clear();
  //   if(localStorage.length>1){
  //     localStorage.setItem('productoSeleccionado',''+localStorage.getItem('productoSeleccionado')+id);
  //   }else{
  //     localStorage.setItem('productoSeleccionado',`${id}`);
  //   }
  // }

}
