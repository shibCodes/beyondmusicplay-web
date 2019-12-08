import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; 
import { YoutubeService } from 'src/app/services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PagePlayComponent implements OnInit {
    selectedVideoSubscription:Subscription;
    selectedVideo:any;
    videoBaseURL:string = "https://www.youtube.com/embed/";
    videoURL:string = "https://www.youtube.com/embed/";

    constructor(private youtubeService:YoutubeService, private domSanitizer:DomSanitizer, private router:Router) { }

    ngOnInit() {
        this.selectedVideoSubscription = this.youtubeService.selectedVideoObservable.subscribe(
            selectedVideo => this.updateSelectedVideo(selectedVideo));
    }

    updateSelectedVideo(selectedVideo) {
        this.selectedVideo = selectedVideo;
        this.videoURL = this.videoBaseURL + (this.selectedVideo as any).id;
    }

    getVideoURL() {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
    }

    goBack() {
        this.router.navigate(['/home'])
    }

    ngOnDestroy() {
        this.selectedVideoSubscription.unsubscribe();
    }

}
