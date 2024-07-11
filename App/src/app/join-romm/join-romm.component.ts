import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-joinroom',
  templateUrl: './join-romm.component.html',
  styleUrls: ['./join-romm.component.css']
})
export class JoinRoomComponent {
  roomId = '';
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;
  userEmail: string | null = null;

  constructor(private router: Router, private documentService: DocumentService, private jwtService: JwtService) {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.userEmail = this.jwtService.getEmailFromToken(token);
    }
  }

  joinRoom() {
    if (!this.roomId) {
      this.showMessage('Room ID is required.', 'error');
      return;
    }

    if (!this.userEmail) {
      this.showMessage('User email not found.', 'error');
      return;
    }

    this.documentService.addDocumentToUser(this.userEmail, this.roomId).subscribe({
      next: (response) => {
        this.showMessage('Joined room successfully!', 'success');
        // Navigate to the room page or handle the successful join logic here
        this.documentService.notifyDocumentAdded();
      },
      error: (error) => {
        this.showMessage('Failed to join room.', 'error');
        console.error('Error:', error);
      }
    });
  }

  private showMessage(message: string, type: 'success' | 'error') {
    this.message = message;
    this.messageType = type;
    setTimeout(() => {
      this.message = null;
      this.messageType = null;
    }, 5000);
  }
}
