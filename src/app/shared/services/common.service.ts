import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  baseUrl: string;
  constructor(
    protected http: HttpClient,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    this.baseUrl = baseUrl ? baseUrl : '';
  }
}