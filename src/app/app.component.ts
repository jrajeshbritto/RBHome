import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  books = [
    {
      "name" : "Non-stop India",
      "author" : "Mark Tully"
    },
    {
      "name" : "The Mad Tibetan: Stories from then and now",
      "author" : "Deepti Naval"
    },
    {
      "name" : "Nirbasan",
      "author" : "Taslima Nasreen"
    },
    {
      "name" : "The Best Thing About You is You",
      "author" : "Anupam Kher"
    }
  ];

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
