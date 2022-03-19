import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  //
  constructor(private api: ApiService) {}

  //
  getComments(postId: number): Observable<Comment[]> {
    return this.api.get<Comment[]>(`posts/${postId}/comments`);
  }
}
