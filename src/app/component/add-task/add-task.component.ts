import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Task } from 'src/app/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => { this.showAddTask = value })

  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert('please add a task!')
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);


    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
