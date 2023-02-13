import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  message:Subject<any> = new Subject<any>()
  constructor() { }

  sendMessage(message:any){
    this.message.next({"text":message})
  }
  clearMessage(){
    this.message.next(null)
  }
  getMessage():Observable<any>{
    return this.message.asObservable()
  }
}
