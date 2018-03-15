import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase }  from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  public bookList;
  constructor(private angularFire: AngularFireDatabase) {
  }
  ngOnInit() {
      this.getTask().subscribe(res => {
          this.bookList = res;
      });
  }
  getTask(){
      return this.angularFire.list('/bookList').valueChanges();
  }
}
