import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TiendaVirtual';
  // @Input() bolea:any;

  // @ViewChild(LoginComponent) logincomponent:any;
  
  onlineComponent: any;

  constructor(private route:Router){
  }

  onActivate(event:any){
    // if(event.__proto__.constructor.name== 'LoginComponent'){
    //   this.loginComponent= event;
    // }

    // console.log(event.__proto__.constructor.name);
    this.onlineComponent= event.__proto__.constructor.name;
  }

  onLoginClick(){
    this.route.navigate(['/login']);
  }

  onSignUpClick(){
    this.route.navigate(['/signup']);
  }

  backHome(){
    this.route.navigate(['/']);
  }
}
