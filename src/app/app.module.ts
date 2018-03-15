import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';


import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
