import { Component, OnInit } from '@angular/core';
import { IMessage } from './modals/message.model';
import { Router } from '@angular/router';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent implements OnInit {
  constructor(private router: Router, private messageService: MessageService) {}

  public onSelect(message: IMessage) {
    this.router.navigate(['/message', message.id]);
  }

  model: Array<IMessage> = [];

  ngOnInit() {
    this.messageService.getMessages().subscribe((data) => {
      this.model = data;
    });
  }
}
