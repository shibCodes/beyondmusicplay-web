import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    @Input() videoDetails:any;

    constructor(private router:Router, private youtubeService:YoutubeService) { }

    ngOnInit() {
    }

    goToVideo() {
        this.youtubeService.selectVideo(this.videoDetails);
        this.router.navigate(['/play', (this.videoDetails as any).id]);
    }

}
