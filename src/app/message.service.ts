import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) {}
  sendMessage(body) {
    //alert(body.subject);
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // console.log(body);
    let url = 'http://localhost:5000/sendmail/';
    // send the data to theb node server
    return this.http.post(url, body,httpOptions).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }
}
