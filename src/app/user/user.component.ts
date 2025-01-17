import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // avatar = input.required();
  // name = input.required();
  @Output() select = new EventEmitter();
  // select = output();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
