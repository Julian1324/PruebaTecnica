import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Input() bolea:any;

  nombreUsuario:string='';
  // static isInTiendaSec: LoginComponent;
  constructor(private route:Router){}

  ngOnInit(): void {
  }

  onLoginAction(){
    const Http = new XMLHttpRequest();
    var name:any;
    var password:any;
    name= document.querySelector('#username');
    name= name.value;
    password= document.querySelector('#password');
    password= password.value;

    const url=`http://localhost:4000/login?name=${name}&password=${password}`;
    Http.open('GET', url, true);
    
    Http.send();

    
    Http.onload = (e) => {

      if(Http.status==0 || Http.status==404){
        alert('Datos inexistentes');
      }else{
        var data= JSON.parse(Http.responseText);
          
        if(data.contrasena== password){
          localStorage.setItem('logged',`${name}`);
          localStorage.setItem('saldo','5000000');
          this.route.navigate(['/tienda']);
        }else{
          alert('Por favor verifique su información');
        }
      }
        
    }
  }

}
