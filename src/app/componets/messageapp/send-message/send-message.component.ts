import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(private msgsvc:MessageServiceService) { }

  ngOnInit(): void {
  }

  sendMessage(msg:any){
    console.log(msg)
    this.msgsvc.sendMessage(msg)
  }

}
