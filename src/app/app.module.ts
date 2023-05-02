import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { ArchiveRecordComponent } from './components/archive-record/archive-record.component';
import {FormsModule} from "@angular/forms";
import {RecordService} from "./record-service.service";

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    ArchiveRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
