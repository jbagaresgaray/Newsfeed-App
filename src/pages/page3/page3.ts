import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { NewsServices } from '../../providers/news-services';

import { Page4 } from '../../pages/page4/page4';

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-page3',
    templateUrl: 'page3.html'
})
export class Page3 {

    source: any;
    newsData: any[];
    color: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private newsServices: NewsServices) {
        this.color = navParams.get('color');
        this.source = navParams.get('item');
    }

    ionViewDidLoad() {
        this.newsServices.loadNewsArticles(this.source.id).then((data: any) => {
            console.log('data: ', data);
            if (data.status == 'ok') {
                this.newsData = data.articles;
                console.log('this.newsData: ', this.newsData);
            }
        });
    }

    doRefresh(refresher) {
        this.newsData = [];
        this.newsServices.loadNewsArticles(this.source.id).then((data: any) => {
            console.log('data: ', data);
            if (data.status == 'ok') {
                this.newsData = data.articles;
                refresher.complete();
            }
        });
    }


    itemTapped(item) {
        this.navCtrl.push(Page4, {
            item: item,
            color: this.color
        });
    }
}
