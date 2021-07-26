import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  toAddProduct(){
    const Http = new XMLHttpRequest();

    var name:any= document.querySelector('#nombre');
    name= name.value;
    console.log(name);
    
    var descripcion:any= document.querySelector('#descripcion');
    descripcion= descripcion.value;
    var costo:any= document.querySelector('#costo');
    costo= costo.value;
    var precioventa:any= document.querySelector('#precioventa');
    precioventa= precioventa.value;

    const url=`http://localhost:4000/productos/${name}/${descripcion}/${costo}/${precioventa}`;
    Http.open('POST', url, true);
    Http.send();

    
    Http.onload = (e) => {
        console.log(Http.responseText);
    }

    var limpiar1:any=document.querySelector('#nombre');
    limpiar1.value='';
    var limpiar2:any=document.querySelector('#descripcion');
    limpiar2.value='';
    var limpiar3:any=document.querySelector('#costo');
    limpiar3.value='';
    var limpiar4:any=document.querySelector('#precioventa');
    limpiar4.value='';

    alert('Producto agregado correctamente');
    this.route.navigate(['/tienda']);
  }
}
