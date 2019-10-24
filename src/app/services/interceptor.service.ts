import { Injectable } from '@angular/core';
import {
  HttpEvent, 
  HttpInterceptor, 
  HttpHandler, 
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { ServiceService } from './service.service';

@Injectable() 		//{providedIn: 'root'}

export class InterceptService  implements HttpInterceptor {

	constructor(
        private authService: ServiceService
        ) { }
  	intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

	    return next.handle(request)
	    .pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {
	            console.log(event.status);
	          }
	        }, error => {
	          	console.error(error.status);
	          	console.error(error.message);

	        })
	      )

    };
  
 
}