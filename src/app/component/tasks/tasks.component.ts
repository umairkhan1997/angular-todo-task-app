import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskSerive: TaskService) { }

  ngOnInit(): void {
    this.taskSerive.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskSerive.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task, 'task')
    this.taskSerive.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    console.log(task, 'task')
    this.taskSerive.addTask(task).subscribe((task) => (this.tasks.push(task)))
  }

}
