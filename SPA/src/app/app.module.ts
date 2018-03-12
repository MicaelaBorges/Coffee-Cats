import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { TitleComponent } from './header/title/title.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { AuthorComponent } from './body/sidebar/author/author.component';
import { SocialNetworkComponent } from './body/sidebar/social-network/social-network.component';
import { SearchBarComponent } from './body/sidebar/search-bar/search-bar.component';
import { ChronologicalTableComponent } from './body/sidebar/chronological-table/chronological-table.component';
import { FrontPageComponent } from './body/front-page/front-page.component';
import { PhotosComponent } from './body/photos/photos.component';
import { VideosComponent } from './body/videos/videos.component';
import { PostsComponent } from './body/posts/posts.component';
import { Post001Component } from './body/posts/post001/post001.component';
import { Post002Component } from './body/posts/post002/post002.component';
import { NotesComponent } from './body/notes/notes.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FrontPageComponent,
        AuthorComponent,
        SocialNetworkComponent,
        SearchBarComponent,
        ChronologicalTableComponent,
        NavigationBarComponent,
        TitleComponent,
        BodyComponent,
        SidebarComponent,
        PostsComponent,
        PhotosComponent,
        VideosComponent,
        Post001Component,
        Post002Component,
        NotesComponent
    ],
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        FlexLayoutModule,
        AppRoutingModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
