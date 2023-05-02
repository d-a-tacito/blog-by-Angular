import {Component, Input} from '@angular/core';
import {RecordService} from "../../record-service.service";

@Component({
  selector: 'app-archive-record',
  templateUrl: './archive-record.component.html',
  styleUrls: ['./archive-record.component.css']
})
export class ArchiveRecordComponent {
  @Input()archiveTitle: any;

  archives: any[] =[];
  constructor(private recordService:RecordService) {
    this.archives=recordService.archives;
  }
}
