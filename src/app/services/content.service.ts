import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getBlogContent() {
    return this.http.get(
      'https://demo.dotcms.com/api/content/render/false/query/+contentType:Blog/orderby/modDate%20desc'
    );
  }
}
