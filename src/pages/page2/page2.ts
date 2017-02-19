import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  category: any;
  data: any[];
  sources: any[];
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.category = navParams.get('category');
    this.data = navParams.get('sources');
    this.color = navParams.get('color');

    this.sources = _.filter(this.data,{category: this.category});
    console.log('sources: ',this.sources);
  }

  itemTapped(event, item) {
    this.navCtrl.push(Page2, {
      item: item
    });
  }
}
