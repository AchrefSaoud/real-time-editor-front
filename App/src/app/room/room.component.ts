import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { UserService } from '../services/user.service';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  userEmail: string | null = null;
  rooms: any;

  constructor(private router: Router, private jwtService: JwtService, private userService: UserService, private documentService: DocumentService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    console.log(token);
    if (token) {
      this.userEmail = this.jwtService.getEmailFromToken(token);
      console.log(this.userEmail);
    }
    if (this.userEmail != null) {
      this.getRooms(this.userEmail);
    }

    this.documentService.getDocumentAddedObservable().subscribe(() => {
      if (this.userEmail != null) {
        this.getRooms(this.userEmail);
      }
    });
  }

  getRooms(userEmail: string) {
    this.userService.getDocuments(userEmail).subscribe(
      data => {
        this.rooms = data;
      },
      error => {
        console.log("Failed to load the documents: " + error);
      }
    );
  }

  enterRoom(room: any) {
    // Implement the logic to enter the room
  }

  toDocument(id :string) {
    this.router.navigate(['/document', id]);
  }
}
