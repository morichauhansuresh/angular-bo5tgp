import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
// HttpClient
import { HttpClientModule } from "@angular/common/http";
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [     BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgGridModule.withComponents([]) ],
    declarations: [ AppComponent, HelloComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
