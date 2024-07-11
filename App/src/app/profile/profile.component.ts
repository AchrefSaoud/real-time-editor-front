import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  name: string = '';
  newPassword: string = '';
  oldPassword: string='';

  constructor() {}

  saveChanges() {
    // Logic to update the name
    console.log('Name updated to:', this.name);
  }

}
