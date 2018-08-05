import { Component, OnInit } from '@angular/core';
// import { Fi } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';
import {error} from 'selenium-webdriver';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // title = 'app';
  // itemValue = '';
  //
  // items: Observable<any[]> = new Observable<any[]>();
  // user;

  cuisines: Observable<any[]> = new Observable<any[]>();
  restaurants: Observable<any[]> = new Observable<any[]>();

  constructor(private db: AngularFireDatabase) {
  }

  // onSubmit() {
  //   this.db.list('/cuisine').push({ content: this.itemValue });
  //   this.itemValue = '';
  // }

  ngOnInit() {
    // this.items = this.db.list('/data').valueChanges();
    // this.user = this.db.object('/user').valueChanges();

    this.cuisines = this.db.list('/cuisines')
      .valueChanges();

    this.restaurants = this.db.list('/restaurants')
      .valueChanges()
      .pipe(
        map(restaurants => {
          console.log('Before map', restaurants);
          restaurants.map((restaurant: any) => {
            restaurant.cuisineType = this.db.object('/cuisines/' + restaurant.cuisine).valueChanges();
            this.db.object('/cuisines/' + restaurant.cuisine)
              .valueChanges()
              .subscribe(
                item => console.log('######', item)
              );
          });
          console.log('After map', restaurants);

          return restaurants;
        })
      );

  }

  // onAdd() {
  //   this.db.list('/data').push({ name: 'www'});
  // }
  //
  // onUpdate() {
  //   this.db.object('/user').set({ name: 'www2'});
  //   // this.db.object('/favorite/1/10').set({ name: 'www1'});
  //   this.db.object('/favorite/1/10').set(null);
  // }
  //
  // onRemove() {
  //   this.db.object('/user').remove()
  //     .then(x => console.log('SUCCESS'))
  //     .catch(errors => console.log('ERROR', errors));
  // }

}
