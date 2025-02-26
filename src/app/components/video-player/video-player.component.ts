import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IonicSharedModule } from 'src/modules/ionic-shared.module';
import { SharedModule } from 'src/modules/shared.module';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true,
  imports: [IonicSharedModule, SharedModule],
})
export class VideoPlayerComponent {
  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  @Input({ required: true }) src!: string;

  get isVideoPause() {
    if (!this.videoPlayer) return true;
    return this.videoPlayer.nativeElement.paused;
  }

  get isVideoEnded() {
    if (!this.videoPlayer) return true;
    return this.videoPlayer.nativeElement.ended;
  }

  playVideo() {
    if (!this.videoPlayer) {
      return;
    }
    if (this.isVideoPause) {
      this.videoPlayer.nativeElement.play();
      return;
    }
    this.videoPlayer.nativeElement.pause();
  }
}
