import { Routes } from '@angular/router';
import Home from './pages/home/home';
import Places from './pages/places/places';
import News from './pages/news/news';
import Posts from './pages/posts/posts';
import { NewEntry } from './pages/news/new-entry/new-entry';

export const routes: Routes = [
  {
    path: 'home',  component: Home
  },
  {
    path: 'places', component: Places
  },
  {
    path: 'news', component: News
  },
  {
    path: 'news/:id', component: NewEntry
  },
  {
    path: 'news/entry', component: NewEntry
  },
  {
    path: 'posts', component: Posts
  },
  {
    path: '**', redirectTo: 'home'
  }
];
