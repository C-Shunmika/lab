import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

userid: string;
password: string;
error: string;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  login(){
    console.log('userid', this.userid);
    console.log('password', this.password);
    if( this.userid === 'nandhini'){
      if( this.password !== 'ece1'){
        console.log('userid', this.password);
        this.error = 'invalid password';
      }else {
      this.router.navigate(['categories']);
    }
  }

    else if( this.userid === 'shunmika'){
      if( this.password !== 'ece1'){
        console.log('userid', this.password);
        this.error = 'invalid password';
      }else {
      this.router.navigate(['categories']);
    }
  }
     else if( this.userid === 'gobika'){
      if( this.password !== 'ece1'){
        console.log('userid', this.password);
        this.error = 'invalid password';
      }else {
      this.router.navigate(['categories']);
    }
  }
    else if( this.userid === 'jenifer'){
      if( this.password !== 'ece1'){
        console.log('userid', this.password);
        this.error = 'invalid password';
      }else {
      this.router.navigate(['categories']);
    }
  }
  else{
    this.error="User not found"
  }
  }
}