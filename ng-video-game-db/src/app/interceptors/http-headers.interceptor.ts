import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '2216dfeb63msh2a7fef0a577838ep18d1a7jsn9951b0fa8141',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key: 'e877263328994ca1adc8d9b1bea51d61',
            }
        });
        return next.handle(req);
    }
}