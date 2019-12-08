import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class YoutubeService {

    private selectedVideo = new BehaviorSubject<object>({});
    selectedVideoObservable = this.selectedVideo.asObservable();

    constructor() { }

    initialiseGAPI() {

        let resolver = (resolve, reject) => {

            (<any>window).gapi.load('client', () => {
                (<any>window).gapi.client.init({
                    'apiKey': 'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw',
                    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
                }).then(() => {
                    resolve((<any>window).gapi.client);
                }, function (reason) {
                    console.log('Error: ' + reason);
                    reject(reason);
                })
            });
            
        }

        return new Promise(resolver);

    }

    getVideos() {
        return (<any>window).gapi.client.youtube.playlistItems.list({
            part: 'snippet, contentDetails, status',
            playlistId: 'PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ',
            maxResults: 10
        });
    }

    selectVideo(video) {
        this.selectedVideo.next(video);
    }

}