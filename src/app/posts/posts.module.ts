import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostCommentsComponent,
    PostCommentComponent,
  ],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
