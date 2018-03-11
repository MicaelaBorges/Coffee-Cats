import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from './body/front-page/front-page.component';
import { PhotosComponent } from './body/photos/photos.component';
import { VideosComponent } from './body/videos/videos.component';
import { PostsComponent } from './body/posts/posts.component';
import { Post001Component } from './body/posts/post001/post001.component';
import { Post002Component } from './body/posts/post002/post002.component';
import { NotesComponent } from './body/notes/notes.component';

const routes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'front-page', component: FrontPageComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'post001', component: Post001Component },
    { path: 'post002', component: Post002Component },
    { path: 'notes', component: NotesComponent }
  
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
