import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { buffer } from 'rxjs';
import { Fichier } from './fichier';
import { UploadServiceService } from './upload-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ng_Upload';
  item: Fichier = { FileContent: '', FileType: '', Name: '' };
  formUpload: FormGroup;
  file?: File;
  content?: string | ArrayBuffer;
  items: any;
  constructor(private readonly _uploadService: UploadServiceService) {
    this.formUpload = new FormGroup({
      NameFile: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.getFiles();
  }
  async OnUploadFile($event: any) {
    this.file = $event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        if (reader.result != undefined) this.item.FileContent = reader.result;
        console.log('in charge');
        console.log(this.item.Content);
      },
      false
    );
    if (this.file) {
      reader.readAsDataURL(this.file);
    }
  }
  async save() {
    this.item.Name = this.formUpload.value.NameFile;
    this.item.FileType = this.file?.type ?? 'No type';
    let result = await this._uploadService.uploadFile(this.item);
    result.subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  async getFiles() {
    var result = await this._uploadService.GetFiles();
    result.subscribe(
      (data: any) => {
        this.items = data.result;
        console.log(data.result);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  async OpenFile(data: Fichier) {
    console.log(data);
    const linkSource = data.FileContent+"";
    // const downloadLink = document.createElement('a');
    // const fileName ="Test.pdf";
    // downloadLink.href = linkSource;
    // downloadLink.download = fileName;
    // downloadLink.click();

    window.open(linkSource);
    
  }
}
