import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    var username:any=document.querySelector('.home');
    username.innerHTML=localStorage.getItem('logged');

    var saldo:any=document.querySelectorAll('.headerOptions')[0];
    saldo.innerHTML='Saldo: '+localStorage.getItem('saldo');
  }

  onAgregarSeccion(){
    this.route.navigate(['/creacion']);
  }

  onCarritoClick(){
    this.route.navigate(['/carrito']);
  }

  onSignOutClick(){
    localStorage.setItem('logged','nobody');
    this.route.navigate(['/']);
  }
}
