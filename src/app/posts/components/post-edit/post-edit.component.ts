import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment.model';
import { Post } from '../../models/post.model';
import { CommentsService } from '../../services/comments.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  //
  post$?: Observable<Post>;

  //
  constructor(private route: ActivatedRoute, private posts: PostsService) {}

  //
  ngOnInit(): void {
    const postId = +this.route.snapshot.params['postId'];

    if (postId) {
      this.post$ = this.posts.getPost(postId);
    }
  }
}
