import { HttpClient, HttpContext, HttpEvent, HttpHandler, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { HttpCachingInterceptor } from "./caching.interceptor";
import { HttpCacheStore } from "./http-cache.store";
import { Inject } from "@angular/core";
import { HTTP_CACHE_SETTINGS } from "./settings-token";
import { IHttpCacheSettings } from "./interfaces/IHttpCacheSettings";

/**
 * For some reason, making an intercetor that just returns `of(cachedResponse)` was not working,
 * so I made a custom HttpClient and dummy HttpHandler that does the same thing.
 *
 * Also see
 * - {@link HttpCacheStore}
 * - {@link HttpCachingInterceptor}
 * - {@link MockHttpHandler}
 */
export class HttpCacheClient extends HttpClient {
  constructor(
    private cacheService: HttpCacheStore,
    @Inject(HTTP_CACHE_SETTINGS) private cacheSettings: IHttpCacheSettings,
    handler: HttpHandler,
  ) {
    super(handler);
  }

  override request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<ArrayBuffer>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "blob"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<Blob>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "text"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<string>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; observe: "events"; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpEvent<ArrayBuffer>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "events"; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "blob"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpEvent<Blob>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "events"; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "text"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpEvent<string>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; reportProgress?: boolean; observe: "events"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; responseType?: "json"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpEvent<any>>;
  override request<R>(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; reportProgress?: boolean; observe: "events"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; responseType?: "json"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpEvent<R>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "response"; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpResponse<ArrayBuffer>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "response"; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "blob"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpResponse<Blob>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "response"; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "text"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpResponse<string>>;
  override request(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; reportProgress?: boolean; observe: "response"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; responseType?: "json"; withCredentials?: boolean; }): Observable<HttpResponse<Object>>;
  override request<R>(method: string, url: string, options: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; reportProgress?: boolean; observe: "response"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; responseType?: "json"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<HttpResponse<R>>;
  override request(method: string, url: string, options?: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; responseType?: "json"; reportProgress?: boolean; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<Object>;
  override request<R>(method: string, url: string, options?: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; responseType?: "json"; reportProgress?: boolean; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<R>;
  override request(method: string, url: string, options?: { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; observe?: "body" | "events" | "response"; reportProgress?: boolean; responseType?: "arraybuffer" | "blob" | "json" | "text"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; }): Observable<any>;
  override request<R>(method: unknown, url?: unknown, options?: unknown): Observable<import("@angular/common/http").HttpEvent<R>> | Observable<ArrayBuffer> | Observable<Blob> | Observable<string> | Observable<import("@angular/common/http").HttpEvent<ArrayBuffer>> | Observable<import("@angular/common/http").HttpEvent<Blob>> | Observable<import("@angular/common/http").HttpEvent<string>> | Observable<import("@angular/common/http").HttpEvent<any>> | Observable<import("@angular/common/http").HttpEvent<R>> | Observable<import("@angular/common/http").HttpResponse<ArrayBuffer>> | Observable<import("@angular/common/http").HttpResponse<Blob>> | Observable<import("@angular/common/http").HttpResponse<string>> | Observable<import("@angular/common/http").HttpResponse<Object>> | Observable<import("@angular/common/http").HttpResponse<R>> | Observable<Object> | Observable<R> | Observable<any> {
    var cachedResponse = this.cacheService.urlCache[url as string];
    var wasInCache = cachedResponse !== undefined && cachedResponse !== null;
    if (wasInCache) {
      if (this.cacheSettings.onlyUseCache === false) {
        console.log("No cached response for", url, "Fetching...");
        return super.request(method as string, url as string, options as { body?: any; headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; transferCache?: { includeHeaders?: string[]; } | boolean; });
      }
      console.log("No cached response for", url);
    }
    return of(cachedResponse.body);
  }
}
