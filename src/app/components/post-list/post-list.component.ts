import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts!: Observable<any[]> = []; 
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.posts = [];
  }
}
