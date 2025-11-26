import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { SearchBar } from "../../components/search-bar/search-bar";
import { Footer } from "../../components/footer/footer";
import { PostCard } from "../../components/home-elements/recent-post/post-card/post-card";

@Component({
  selector: 'app-posts',
  imports: [Navbar, Sidebar, SearchBar, Footer, PostCard],
  templateUrl: './posts.html',
  styles: ``,
})
export default class Posts {

}
