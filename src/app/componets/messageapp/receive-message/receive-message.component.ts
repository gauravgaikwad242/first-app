import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent implements OnInit {
messages:any[]=[]
  constructor(private msgsvc:MessageServiceService) { }

  ngOnInit(): void {
    this.getMessage()
  }

  getMessage(){
    this.msgsvc.getMessage().subscribe((msg)=>{
this.messages.push(msg)
    })
  }

}
