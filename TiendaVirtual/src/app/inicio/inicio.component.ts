import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // @Input() nameUser:any;
  primeralinea:any;
  segundalinea:any;
  timer:number=0;
  stop:boolean=true;

  constructor(private route:Router) {
    // this.backgroundd= document.querySelector("#hContainer");
    // console.log(this.backgroundd);
  }


  ngOnInit(): void {
    
    this.primeralinea= document.querySelector(".primeralinea");
    this.segundalinea= document.querySelector(".segundalinea");

    this.primeralinea.animate([
      {marginLeft: '50vw'},
      {marginLeft: '5vw'}
      ],{
        duration: 14000,
        iterations: Infinity
    });

    this.segundalinea.animate([
      {marginLeft: '50vw'},
      {marginLeft: '5vw'}
      ],{
        duration: 14000,
        iterations: Infinity
    });

    
  }

  rutaAprendizaje(): void {
    this.route.navigate(['/', 'rutaAprendizaje']);
  }

}
