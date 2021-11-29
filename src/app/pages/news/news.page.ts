import { Component, OnInit } from '@angular/core';
import { NewsService }  from '../../services/news.service';
import { Article } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: Article[] = []

  constructor(private newsService:NewsService,
    private menuController: MenuController) { }

  ngOnInit() {
    this.newsService.obtener().subscribe(resp=>{
      console.log('news',resp);
      this.news.push(...resp.articles);
    });


  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}
