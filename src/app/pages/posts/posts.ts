import { Component, inject, signal } from '@angular/core';
import { SearchBar } from "../../shared/components/search-bar/search-bar";
import { PostCard } from "../../shared/components/post-card/post-card";
import { PlacesService } from '../../shared/services/places-service';
import { PlaceMapper } from '../../shared/mapper/place-mapper';
import { Publicaciones } from '../../shared/interfaces/mm-interfaces';
import { Footer } from '../../shared/components/footer/footer';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Sidebar } from '../../shared/components/sidebar/sidebar';

interface PostData {
  publicacion: Publicaciones,
  negocio: string
}

@Component({
  selector: 'app-posts',
  imports: [Navbar, Sidebar, SearchBar, Footer, PostCard],
  templateUrl: './posts.html',
  styles: ``,
})
export default class Posts {
  placesService = inject( PlacesService );

  categories: string[] = [
    "Comida", "Social", "Cultural", "Restaurante", "Cafetería", "Bar"
  ];

  placePosts = signal<PostData[]>([]);

  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.loadPosts('categoria/social');
  }

  loadPosts(searchParams: string): void {

    this.placesService.loadPlacesList(searchParams).subscribe(
      (resp) => {
        const places = PlaceMapper.mapPlaceItemsToArray(resp);
        this.placesService.placesList.set(places);

        const posts: PostData[] = [];
        for(const place of this.placesService.placesList()){
          if (place.publicaciones) {
            for (const post of place.publicaciones) {
              posts.push({
                publicacion: post,
                negocio: place.nombre
              });
            }
          }
        }

        this.placePosts.set(posts);
      }
    );

  }

  changePostList(searchParams: string): void {
    this.loadPosts(searchParams);
  }

  searchPlaceList(query:string){
    console.log(query)
    this.placesService.searchPostList(query).subscribe({
      next: resp => {
        const posts: PostData[] = []
        for(const post of resp){
          posts.push({
            publicacion: {
              id:post.id,
              titulo:post.titulo,
              contenido:post.contenido,
              fechaCreacion:post.fechaCreacion,
              imagen: post.imagen
            },
            negocio: post.nombreNegocio
          })
        }
        this.placePosts.set(posts);
      },
      error: err => console.log(err)

    })
  }

}
