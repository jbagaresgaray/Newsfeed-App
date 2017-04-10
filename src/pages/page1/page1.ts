import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from 'lodash';

import { Page2 } from '../../pages/page2/page2';
import { NewsServices } from '../../providers/news-services';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
    sources: any[];
    colors: any[];
    icons: any[];
    newsData: any[];

    constructor(public navCtrl: NavController, private newsServices: NewsServices) {
        this.sources = [];
        this.newsData = [];
        let colors = [
        	'royal',
            'energized',
            'assertive',
            'positive',
            'lightroyal'
        ];

        let assetpath = '../assets/icon/';
        let icons = [
        	assetpath + 'diagram.png',
        	assetpath +'video-camera.png',
        	assetpath + 'gamepad.png',
        	assetpath + 'notebook.png',
        	assetpath + 'headphone-symbol.png',
            assetpath + 'shake-hands.png',
        	assetpath + 'atom.png',
        	assetpath + 'football.png',
        	assetpath + 'memory-chip.png'
        ];
        this.icons = icons;
        this.colors = _.concat(colors,colors,colors);
    }

    ionViewDidLoad() {
        this.newsServices.loadNewsSources().then((data: any) => {
            console.log('data: ', data);
            if (data.status == 'ok') {
                this.newsData = data.sources;
                let category = _.uniq(_.map(data.sources, (row) => {
                    return row.category
                }));
                this.sources = _.sortBy(category,[(o)=>{
                	return o;
                }]);
                console.log('this.sources: ', this.sources);
            }
        });
    }

    showSources(category,color) {
        this.navCtrl.push(Page2,{
        	category: category,
        	color: color,
        	sources: this.newsData
        })
    }

}
