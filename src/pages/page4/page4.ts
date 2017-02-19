import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { InAppBrowser,SocialSharing } from 'ionic-native';

import { Page3 } from '../../pages/page3/page3';
/*
  Generated class for the Page4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-page4',
    templateUrl: 'page4.html'
})
export class Page4 {

    article: any;
    color: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.color = navParams.get('color');
        this.article = navParams.get('item');
        this.article.publishedAt = moment(this.article.publishedAt).format('MMMM Do YYYY, h:mm:ss a');
        console.log('this.article: ', this.article);

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Page4Page');
    }

    openToBrowser(url) {
    	let browser = new InAppBrowser(url, '_blank','zoom=yes,location=yes');
    }
}
