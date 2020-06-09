import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
  styleUrls: ['./department.page.scss'],
})
export class DepartmentPage implements OnInit {
  departlist : any;
  
  constructor() { }

  ngOnInit() {

    this.departlist = [{"name":"ece","section":"A"},{"name":"cse","section":"B"},{"name":"mech","section":"C"}];
  }

}
