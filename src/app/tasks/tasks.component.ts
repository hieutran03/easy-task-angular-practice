import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true}) id!: string;
  constructor(private tasksService: TasksService){}
  isAddingTask = false;
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
