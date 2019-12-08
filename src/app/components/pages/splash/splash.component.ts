import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.scss']
})
export class PageSplashComponent implements OnInit {
    appTitle:string = "MusicPlay";
    buttonFadeIn:boolean = true;

    constructor(private router:Router) { }

    ngOnInit() {
        
    }

    animationEnd(event) {
        this.buttonFadeIn = false;
    }

    enterSite() {
        this.router.navigate(['home']);
    }
}
