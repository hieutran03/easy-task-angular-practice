import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TasksComponent]
})
export class TasksModule{}