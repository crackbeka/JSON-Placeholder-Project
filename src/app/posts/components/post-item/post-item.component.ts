import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  //
  @Input()
  post?: Post;

  //
  actionsOpen = false;

  //
  constructor(private posts: PostsService) {}

  //
  ngOnInit(): void {}

  //
  deletePost() {
    this.posts.deletePost(this.post!.id).subscribe();
  }
}
