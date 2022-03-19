import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

@NgModule({
  declarations: [AlbumDetailsComponent, AlbumItemComponent, AlbumListComponent],
  imports: [CommonModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
