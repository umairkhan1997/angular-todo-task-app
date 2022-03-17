import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log('asdasd')
  }
}
