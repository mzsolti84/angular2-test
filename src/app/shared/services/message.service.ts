import { Inject, Injectable, Optional } from '@angular/core';
import { API_BASE_URL, CommonService } from './common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../../messages/modals/message.model';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends CommonService {
  // Add any additional properties or methods specific to the inherited service

  constructor(
    http: HttpClient,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    super(http, baseUrl);
  }

  getMessages(): Observable<Array<Message>> {
    let url = this.baseUrl + '/posts';
    return this.http.get<Array<Message>>(url).pipe(take(20));
  }

  getMessage(id: number): Observable<Message> {
    let url = `${this.baseUrl}/posts/${id}`;
    return this.http.get<Message>(url);
  }

  addMessage(message: Message): Observable<Object> {
    let url = this.baseUrl + '/posts';

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    return this.http.post(url, JSON.stringify(message), options);
  }
}
