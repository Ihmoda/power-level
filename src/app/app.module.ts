import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanfourComponent } from './supersaiyanfour/supersaiyanfour.component';
import { SupersaiyanthreeComponent } from './supersaiyanthree/supersaiyanthree.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanfourComponent,
    SupersaiyanthreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
