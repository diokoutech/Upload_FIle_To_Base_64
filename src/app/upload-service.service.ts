import {
  HttpClient,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fichier } from './fichier';

@Injectable({
  providedIn: 'root',
})
export class UploadServiceService {
  private readonly BaseUrl: string =
    'https://localhost:44311/api/services/app/UploadFile/Upload';
      private readonly BaseUrl2: string =
    'https://localhost:44311/api/services/app/UploadFile/GetAllUploads';
  optionsHttp: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiem9sYSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InpvbGFAZ21haWwuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiI3M0dFN0Y2TFJHN0xXWFpNM0VVUk5HVFZKRFJLWU5OUyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJVc2VyIiwiU2lnbmF0YWlyZSJdLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwic3ViIjoiNCIsImp0aSI6IjlkYjBiZDAzLTI0OTQtNGY2MC1iY2I0LTMzODRmMTg2ZTJkYSIsImlhdCI6MTY3ODE5NDI4NCwibmJmIjoxNjc4MTk0Mjg0LCJleHAiOjE2NzgyODA2ODQsImlzcyI6IkJMT0JVUyIsImF1ZCI6IkJMT0JVUyJ9.wg0udBw_SKqZs4jQTq5UR-b5azq_tqBgbl6DSToyCFs',
  });

  constructor(private readonly _httpClient: HttpClient) {}

  async uploadFile(item: Fichier): Promise<any> {
    console.log(item);
    return await this._httpClient.post<any>(this.BaseUrl, item,{headers: this.optionsHttp});
  }
  async GetFiles(): Promise<any> {
    return await this._httpClient.get<any>(this.BaseUrl2,{headers : this.optionsHttp});
  }
}
