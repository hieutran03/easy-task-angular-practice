import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser(){
    const user = this.users.find((user)=>user.id === this.selectedUserId);
    if(!user)
      throw new Error("No user is found");
    return user;
  }

  onSelectedUser(id: string){
    this.selectedUserId = id; 
  }
}
