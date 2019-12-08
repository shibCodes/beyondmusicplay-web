import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class PageHomeComponent implements OnInit {
    allVideos = [];
    isLoading:boolean = true;
    showNoVideosMessage:boolean = false;

    constructor(private youtubeService: YoutubeService) { }

    ngOnInit() {
        this.youtubeService.initialiseGAPI()
            .then(this.youtubeService.getVideos)
            .then(this.handleYouTubeResponse.bind(this));
            
    }

    handleYouTubeResponse(videos) {
        this.isLoading = false;
        (videos.result.items.length > 0) ? this.organiseVideoData(videos) : this.showNoVideosMessage = true;
    }

    organiseVideoData(videos) {

        videos.result.items.forEach(video => {
                
            let videoObj = {
                "title": (video.snippet.title) ? video.snippet.title : "Untitled",
                "img": undefined,
                "published": (video.contentDetails.videoPublishedAt) ? video.contentDetails.videoPublishedAt : "NA",
                "description": (video.snippet.description) ? video.snippet.description : "NA",
                "summary_description": (video.snippet.description) ? video.snippet.description.substring(0, 250) + "..." : "NA",
                "id": video.contentDetails.videoId
            };

            if (video.snippet.thumbnails.high) { videoObj.img = video.snippet.thumbnails.high.url; }
            else if (video.snippet.thumbnails.default) { videoObj.img = video.snippet.thumbnails.default.url; }
            else { videoObj.img = "videoplaceholder.png"; }



            this.allVideos.push(videoObj);

        });

    }


}
