import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class MyInterceptor1 implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = "abc-111"
    console.log(req)
    const requestWithToken = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authToken}`
      }
    })
    return next.handle(requestWithToken)
  }
}
