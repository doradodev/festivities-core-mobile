import { Injectable } from '@angular/core';
import { Festivity } from '../models/festivity.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class FestivityService{

    private apiUrl = 'http://localhost:8081/api/festivities/';
    private headers      = new Headers({ 'Content-Type': 'application/json' });     
    private options = new RequestOptions({ headers: this.headers });
    

    constructor (private http: Http) {}
     
    getFestivities() : Observable<Festivity[]> {        
         
         return this.http.post(this.apiUrl + 'findAll', this.headers)                        
                         .map((res:Response) => res.json())                        
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

        updateFestivity (_festivity: Festivity): Observable<Festivity[]> {
                    
        return this.http.put(`${this.apiUrl}${_festivity['id']}` , _festivity, this.options)
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }

     removeFestivity (id:number): Observable<Festivity[]> {
                
        return this.http.delete(`${this.apiUrl}${id}`) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }

      createFestivity(_festivity: Festivity) : Observable<Festivity[]> {        
         
         return this.http.post(`${this.apiUrl}${null}`, _festivity, this.options)                        
                         .map((res:Response) => res.json())                        
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }      
     

}