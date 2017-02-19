import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { Page3 } from '../../pages/page3/page3';

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
  }

  itemTapped(item) {
    this.navCtrl.push(Page3, {
      item: item,
      color: this.color
    });
  }
}
