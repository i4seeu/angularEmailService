import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmailServiceApp';
  constructor(private messageservice: MessageService) {}
  ngOnInit() { } 
  
  onClickSubmit(data) {
    this.messageservice.sendMessage(data.subject);
    //alert("message : " + data.message); 
  }
}
