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
  private readonly BaseUrl: string = 'https://localhost:44311/api/services/app/UploadFile/Upload';
      private readonly BaseUrl2: string ='https://localhost:44311/api/services/app/UploadFile/GetAllUploads';
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBkZWZhdWx0dGVuYW50LmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiZjk1YTc5NjItZWIyZi0yOWI1LWVlZjUtM2EwOWNkOGM5YTk2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwic3ViIjoiMiIsImp0aSI6ImFhOTRkZGQ4LWVmMmQtNGQzMi05ZjQ4LTBjYTlmZmNmZGQ5ZSIsImlhdCI6MTY3ODI3Njg1NSwibmJmIjoxNjc4Mjc2ODU1LCJleHAiOjE2NzgzNjMyNTUsImlzcyI6IkJMT0JVUyIsImF1ZCI6IkJMT0JVUyJ9.fevt9FjfPq2C7jvkD_Yi879Zyx4LLHKVgrVFq1onlRk";
  optionsHttp: HttpHeaders = new HttpHeaders({
    Authorization:
      "Bearer "+ this.token
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
