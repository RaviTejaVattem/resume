import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'

@Component({
  selector: 'panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.scss']
})
export class PanelHeaderComponent implements OnInit {
  userImage = '';
  githubProfile = "https://api.github.com/users/ravitejavattem"

  constructor(private http: HttpClient) {
    this.getGithubImage();
  }

  ngOnInit() {
  }

  getGithubImage() {
    this.http.get<GithubModel>(this.githubProfile).pipe(
      map((userData: GithubModel) => {
        this.userImage = userData.avatar_url;
      }),
      take(1)).subscribe();
  }
}

interface GithubModel {
  avatar_url: string;
}