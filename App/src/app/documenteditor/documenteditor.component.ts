// src/app/documenteditor/documenteditor.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Quill from 'quill';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-document-editor',
  templateUrl: './documenteditor.component.html',
  styleUrls: ['./documenteditor.component.css'],
})
export class DocumenteditorComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private quill!: Quill;
  users: any[] = ["aaa"];
  documentId!: string;
  documentContent: string = '';
/*
  constructor(
    private route: ActivatedRoute,
    private websocketService: WebSocketService
  ) {}

  ngOnInit() {
    this.documentId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.documentId);
    this.quill = new Quill('#editor', { theme: 'snow' });

    this.quill.on('text-change', () => {
      const content = this.quill.getContents();
      this.websocketService.sendDocument({
        id: this.documentId,
        content: JSON.stringify(content),
      });
    });

    this.websocketService.documentUpdates$.subscribe((document) => {
      if (document.id === this.documentId) {
        this.quill.setContents(JSON.parse(document.content));
      }
    });
  }*/
}
