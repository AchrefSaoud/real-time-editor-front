import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { JwtService } from '../services/jwt.service';

export interface DocumentEntity {
  id: string;
  name: string;
  code: string;
  content: string;
  users: DocumentUser[];
}

export interface DocumentUser {
  userId: string;
  role: string;
}

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit {
  roomName = '';
  userEmail: string | null = null;
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;
  roomCode: string | null = null;

  constructor(private router: Router, private documentService: DocumentService, private jwtService: JwtService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.userEmail = this.jwtService.getEmailFromToken(token);
    }
  }

  createRoom() {
    if (!this.roomName) {
      this.showMessage('Room name is required.', 'error');
      return;
    }

    if (!this.userEmail) {
      this.showMessage('User email not found.', 'error');
      return;
    }

    this.documentService.addDocument(this.userEmail, this.roomName).subscribe({
      next: (response: DocumentEntity) => {
        if (response && response.code) {
          this.roomCode = response.code;
          this.showMessage('Room created successfully!', 'success');
          this.documentService.notifyDocumentAdded();
        } else {
          this.showMessage('Failed to create room. Invalid response from server.', 'error');
        }
      },
      error: (error) => {
        this.showMessage('Failed to create room.', 'error');
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

  copyRoomCode() {
    if (this.roomCode) {
      navigator.clipboard.writeText(this.roomCode).then(() => {
        this.showMessage('Room code copied to clipboard!', 'success');
      }).catch(err => {
        this.showMessage('Failed to copy room code.', 'error');
        console.error('Clipboard Error:', err);
      });
    }
  }
}
