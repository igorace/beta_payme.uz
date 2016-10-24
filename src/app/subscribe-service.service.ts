import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SubscribeServiceService {

  constructor(private _http: Http) { }

  private subscribeUrl = "https://beta.payme.uz/api";

  saveUser (body: Object): Observable<any> {
       /* let bodyString = JSON.stringify(body); 
      let headers = new Headers({ 'Content-Type': 'application/json' }); 
      let options = new RequestOptions({ headers: headers });
      return {"succes": "true"};
    return this._http.post(this.subscribeUrl, body, options) 
                        .map((res:Response) => res.json()) 
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));*/

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      console.log(JSON.stringify(body));
      return this._http.post(this.subscribeUrl, JSON.stringify(body), {headers: headers})
          .map(res => res.json());                   
  }  
}
