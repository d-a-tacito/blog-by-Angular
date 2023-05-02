import { Component, Input } from '@angular/core';
import {RecordService} from "../../record-service.service";
import {Record} from "../../app.component";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  @Input()id:any;
  @Input()author: any;
  @Input()recordTitle: any;
  @Input()category: any;
  @Input()content: any;

  records: Record[]=[];

  constructor(private recordService: RecordService) {
    this.records=recordService.records
  }

  deleteRecord(id: number)
  {
    this.recordService.deleteRecord(id);
  }
  fromRecordToArchive(id: number)
  {
    this.recordService.fromRecordToArchive(id);
  }
}
