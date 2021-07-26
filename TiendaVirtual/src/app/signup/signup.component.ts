import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSignUpAction(){
    const Http = new XMLHttpRequest();

    var name:any= document.querySelector('#username');
    name= name.value;
    var correo:any= document.querySelector('#correo');
    correo= correo.value;
    var password:any= document.querySelector('#password');
    password= password.value;
    var passwordToConfirm:any= document.querySelector('#passwordc');
    passwordToConfirm= passwordToConfirm.value;


    if(password==passwordToConfirm){
        const url=`http://localhost:4000/signup?name=${name}&correo=${correo}&password=${password}`;
        Http.open('POST', url, true);
        Http.send();

    
        Http.onload = (e) => {
            console.log(Http.responseText)
        }

        var limpiar1:any=document.querySelector('#username');
        limpiar1.value='';
        var limpiar2:any=document.querySelector('#password');
        limpiar2.value='';
        var limpiar3:any=document.querySelector('#correo');
        limpiar3.value='';
        var limpiar4:any=document.querySelector('#passwordc');
        limpiar4.value='';

        alert('Registered user successfully');
        localStorage.setItem('saldo','5000000');
        this.route.navigate(['/login']);
    }else{
        alert("Incorrect data, please verify the information");
    }
  }

}
