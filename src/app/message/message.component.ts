import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../messages/modals/message.model';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  model!: Message;
  messageId = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = parseInt(params.get('id') || '1');
      this.messageId = id;

      if (id) {
        this.messageService.getMessage(id).subscribe((data) => {
          this.model = data;
        });
      }
    });
  }

  goNext() {
    const nextId = this.messageId >= 100 ? 1 : this.messageId + 1;
    this.router.navigate(['../', nextId], { relativeTo: this.activatedRoute });
  }

  goPrevious() {
    const previousId = this.messageId - 1;
    this.router.navigate(['../', previousId], {
      relativeTo: this.activatedRoute,
    });
  }
}
