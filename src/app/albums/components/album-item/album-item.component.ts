import { Component, Input, OnInit } from '@angular/core';
import { albums } from '../../albums.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css'],
})
export class AlbumItemComponent implements OnInit {
  @Input()
  album!: albums;

  constructor() {}

  ngOnInit(): void {}
}
