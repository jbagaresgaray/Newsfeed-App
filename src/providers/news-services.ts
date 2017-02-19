import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsServices {
    apiKey: string;

    constructor(public http: Http) {
        this.apiKey = '4a810d4b9a974eaa92f40189fa926434';
    }

    loadNewsSources() {
        return new Promise((resolve, reject) => {
            this.http.get('https://newsapi.org/v1/sources?language=en&apiKey=' + this.apiKey)
                .map(res => res.json())
                .subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                })
        });
    }

    loadNewsArticles(source:string, sortBy ? : string) {
        return new Promise((resolve, reject) => {
            this.http.get('https://newsapi.org/v1/articles?source=' + source + '&language=en&apiKey=' + this.apiKey)
                .map(res => res.json())
                .subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                })
        });
    }
}
