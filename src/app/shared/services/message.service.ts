import { Inject, Injectable, Optional } from '@angular/core';
import { API_BASE_URL, CommonService } from './common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMessage } from '../../messages/modals/message.model';
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

  getMessages(): Observable<Array<IMessage>> {
    let url = this.baseUrl + '/posts';
    return this.http.get<Array<IMessage>>(url).pipe(take(20));
  }

  getMessage(id: number): Observable<IMessage> {
    let url: string = `${this.baseUrl}/posts/${id}`;
    return this.http.get<IMessage>(url);
  }

  addMessage(message: IMessage): Observable<Object> {
    let url: string = this.baseUrl + '/posts';

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    return this.http.post(url, JSON.stringify(message), options);
  }
}
