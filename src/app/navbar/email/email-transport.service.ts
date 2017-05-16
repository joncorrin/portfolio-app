import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Email} from "./email.model";

@Injectable()


export class EmailTransporterService {
  //https://portfoli-o.herokuapp.com/mail
  //http://localhost:8080/mail
  private emailUrl = 'https://portfoli-o.herokuapp.com/mail';

  constructor(private http: Http) {}

  createEmail(email: Email, messageType: string) {
    const body = JSON.stringify(email);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(this.emailUrl +  '/' + messageType, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        return email = new Email(result.obj.subject, result.obj.html);
      })
      .catch((error: Response) => Observable.throw(error.json()));


  }

}
