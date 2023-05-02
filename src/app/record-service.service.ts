import { Injectable } from '@angular/core';
import {Record} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  records: Record[] =
    [
      {
        id:0,
        author: "Alex Pushkin",
        recordTitle: "Presentation of Xiaomi Mijia Pipi Lamp",
        category: "Technologies",
        content: "Xiaomi at its April presentation showed a smart lamp Mijia Pipi Lamp. The main feature is that the device is equipped with an AI camera that tracks the position of the user's hands and responds to gestures."
      }
    ];
  archives:any []=[];
  id:number=1;
  createRecord(record: Record)
  {
    record.id=this.id;
    this.records.push(record)
    this.id++;
  }
  deleteRecord(id: number)
  {
    const index = this.records.findIndex(record =>record.id===id);
    if(index!==-1)
    {
      this.records.splice(index,1)
    }
  }
  fromRecordToArchive(id: number)
  {
    const index = this.records.findIndex(record =>record.id===id);

    const record = this.records.find(rec=>rec.id===id)
    this.archives.push(record?.recordTitle);

    if(index!==-1)
    {
      this.records.splice(index,1)
    }
  }

  constructor() { }
}
