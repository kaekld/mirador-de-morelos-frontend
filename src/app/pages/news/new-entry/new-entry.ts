import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Footer } from "../../../components/footer/footer";
import { Navbar } from "../../../components/navbar/navbar";
import { LucideAngularModule, Instagram, Facebook } from 'lucide-angular';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../services/news-service';

@Component({
  selector: 'app-new-entry',
  imports: [Footer, Navbar, LucideAngularModule, DatePipe],
  templateUrl: './new-entry.html',
  styles: ``,
})
export class NewEntry implements OnInit{

  newsService = inject( NewsService )

  private entryId: string;

  Instagram = Instagram;
  Facebook = Facebook;


  constructor(private route: ActivatedRoute) {
    const entryId = route.snapshot.params['id'];
    this.entryId = (entryId)
  }

  ngOnInit(): void {
    this.newsService.loadNewEntry(this.entryId);
  }

}
