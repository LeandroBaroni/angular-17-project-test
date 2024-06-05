import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [YouTubePlayerModule],
  providers: [],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.scss'
})
export class YoutubePlayerComponent {}
