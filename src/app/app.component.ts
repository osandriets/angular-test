import {Component} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  cuisine: Observable<any[]>;

  itemValue = '';
  items: Observable<any[]> = new Observable<any[]>();

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/data').valueChanges();
    // db.list('/data').valueChanges().subscribe(x => {
    //   this.items = x;
    //   console.log('#', x);
    // });
  }

  // onSubmit() {
  //   this.db.list('/cuisine').push({ content: this.itemValue });
  //   this.itemValue = '';
  // }

  // constructor(public db: AngularFireDatabase) {
  //   console.log(db);
  //
  //   this.cuisine = db.list('/cuisine').valueChanges();
  //
  //     console.log(this.cuisine);
  //   // db.list('/cuisine').subscribe(x => {
  //   //   this.cuisine = x;
  //   // });
  // }
}
