import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { albums, AlbumsService } from '../../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  @Input()
  albums?: albums[];

  albums$?: Observable<albums[]>;

  constructor(private album: AlbumsService) {}

  ngOnInit(): void {
    this.albums$ = this.album.getAlbums();
  }
}
