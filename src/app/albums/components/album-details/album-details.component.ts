import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { albums, AlbumsService } from '../../albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent implements OnInit {
  user!: User;

  @Input() photos?: albums;

  //
  constructor(
    private album: AlbumsService,
    private api: ApiService,
    private route: ActivatedRoute
  ) {}
  //
  ngOnInit(): void {}
}
