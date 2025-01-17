import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name: string | undefined;
  @Input({ required: true }) userId!: string;
  showNewTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  openAddNewTask() {
    this.showNewTask = true;
  }

  closeAddTask() {
    this.showNewTask = false;
  }

  // onCreateTask(newTask: NewTask) {
  //   this.tasksService.addTask(newTask, this.userId);
  // }

  // onCompleteTask(id: string) {
  //   // remove that task from the list
  //   this.tasksService.removeTask(id);
  // }
}
