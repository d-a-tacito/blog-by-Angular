import {Component, NgModule} from '@angular/core';
import {RecordService} from "./record-service.service";
export class Record{
  constructor(
    public id:number,
    public author: string,
    public recordTitle: string,
    public category: string,
    public content: string
  ) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  records: Record[]=[];
  archives: any[]=[];
  title: any='';

  constructor(private recordService: RecordService) {
    this.records=recordService.records
    this.archives=recordService.archives;
  }
  id:number=0;
  author: string="";
  recordTitle: string="";
  category: string="";
  content: string="";

  createRecord()
  {
    if (this.author!='' && this.recordTitle!='' && this.category!='' && this.content!='')
      this.recordService.createRecord(new Record(this.id, this.author, this.recordTitle, this.category, this.content));
  }

}
