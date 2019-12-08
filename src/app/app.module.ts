import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';

import { YoutubeService } from './services/youtube.service';

import { AppComponent } from './app.component';
import { PageSplashComponent } from './components/pages/splash/splash.component';
import { PageHomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/nubs/header/header.component';
import { VideoComponent } from './components/nubs/video/video.component';
import { PagePlayComponent } from './components/pages/play/play.component';

@NgModule({
    declarations: [
        AppComponent,
        PageSplashComponent,
        PageHomeComponent,
        HeaderComponent,
        VideoComponent,
        PagePlayComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ YoutubeService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
