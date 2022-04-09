import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  product() : Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users");
}

}