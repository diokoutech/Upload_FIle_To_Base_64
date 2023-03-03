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
  private optionsHtpp: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBkZWZhdWx0dGVuYW50LmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiOTJkMTBjZTAtNWZjYS04MjYwLTc2OTEtM2EwOWIzYzY1NTQxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwic3ViIjoiMiIsImp0aSI6IjVjYTBiMTYzLWIzOWQtNDk3My1iZDFjLTNiZjc4OTIyZGFhNiIsImlhdCI6MTY3Nzc3MDQxMiwibmJmIjoxNjc3NzcwNDEyLCJleHAiOjE2Nzc4NTY4MTIsImlzcyI6IkJMT0JVUyIsImF1ZCI6IkJMT0JVUyJ9.-Uo0hjs6Ijt44BlvOWJrk3uaS_d-JJK-IUxK-8hSK64',
  });

  constructor(private readonly _httpClient: HttpClient) {}

  async uploadFile(item: Fichier): Promise<any> {
    return await this._httpClient.post<any>(this.BaseUrl, item);
  }
}
