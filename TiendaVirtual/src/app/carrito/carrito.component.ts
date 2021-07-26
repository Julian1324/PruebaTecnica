import { Component, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos:any=[];
  constructor(private route:Router) {
  }

  ngOnInit(): void {
    const Http = new XMLHttpRequest();
    const url=`http://localhost:4000/productos`;
    Http.open('GET', url, true);
    
    Http.send();
    
    Http.onload = (e) => {

      if(Http.status==0 || Http.status==404){
        alert('Datos inexistentes');
      }else{

        // var data = JSON.parse(Http.responseText);
        
        // this.productos= data;

        var parada:any= localStorage.getItem('productoSeleccionado');
        
        for (let i = 0; i < parada.split('').length; i++) {
          this.productos[i]=parada.split('')[i];
          
        }

        // console.log(this.productos);

        // for (let i = 0; i < this.productos.length; i++) {
          
        //   document.querySelectorAll('.descripcionProducto')[i].innerHTML= this.productos[i].descripcion;
        //   console.log(document.querySelectorAll('.descripcionProducto'));
          
        // }

        // var div:any= document.querySelector(".descripcionProducto");
        // var div:any= this.renderer.selectRootElement('app-row-carrito');
        // console.log(div);
        
      }
        
    }

  }

  onBuyAction(){
    var divSaldo= document.querySelectorAll('.headerOptions')[0];
    var divnumerototal:any= document.querySelector('.numerototal');
    var saldoActual:any=0;
    saldoActual=localStorage.getItem('saldo');
    var numerototal:any;
    numerototal=saldoActual - divnumerototal.innerHTML;
    localStorage.setItem('saldo',''+numerototal);
    divSaldo.innerHTML='Saldo: '+numerototal;
    divnumerototal.innerHTML='0';
  }

  onEmpty(){
    localStorage.setItem('productoSeleccionado','');
    this.route.navigate(['/carrito']);
  }

  onKeepBuying(){
    this.route.navigate(['/tienda']);
  }

}
