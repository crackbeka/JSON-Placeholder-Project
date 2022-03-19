import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment.model';
import { Post } from '../../models/post.model';
import { CommentsService } from '../../services/comments.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  //
  post$?: Observable<Post>;

  //
  comments$?: Observable<Comment[]>;

  //
  constructor(
    private comments: CommentsService,
    private route: ActivatedRoute,
    private posts: PostsService
  ) {}

  //
  ngOnInit(): void {
    const postId = +this.route.snapshot.params['postId'];

    if (postId) {
      this.post$ = this.posts.getPost(postId);
      this.comments$ = this.comments.getComments(postId);
    }
  }
}
