import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  url: any = 'http://192.168.0.10:8000/speedmart88/documents/';
  data: any;
  constructor(
    private http : Http
  ) {}
  
  getProducts(){
    return new Promise((resolve, reject) => {
	  		 this.http.get(this.url)
	  		 .subscribe(res => {
                resolve(res.json());
            }, (err) => {
              reject(err);
            });
	    });
  }

}
