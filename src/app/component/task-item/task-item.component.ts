import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task
  @Output() onDeleteTask: EventEmitter<Task[]> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task[]> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }


  ngOnInit(): void {
  }

  onDelete(task) {
    this.onDeleteTask.emit(task)
  }
  onToggle(task) {
    this.onToggleReminder.emit(task)
  }

}
