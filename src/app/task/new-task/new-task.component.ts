import { TasksService } from './../../tasks/tasks.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeAddTask = new EventEmitter<void>();
  // @Output() createNewTask = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // for dependency injection this also can be used
  // private tasksService = inject(TasksService);

  constructor(private tasksService: TasksService) {}

  cancelCreateTask() {
    this.closeAddTask.emit();
  }

  createTask() {
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };

    this.tasksService.addTask(newTask, this.userId);
    this.closeAddTask.emit();
    // this.createNewTask.emit(newTask);
  }
}
