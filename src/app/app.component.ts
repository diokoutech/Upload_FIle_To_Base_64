import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fichier } from './fichier';
import { UploadServiceService } from './upload-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng_Upload';
  item : Fichier = {FileContent: '', FileType: "", Name: ""};
  formUpload : FormGroup;
  file ?: File;
  content ?: string | ArrayBuffer;

  constructor (
    private readonly _uploadService: UploadServiceService
  ){
    this.formUpload = new FormGroup({
      NameFile : new FormControl("",[Validators.required]),
    });
  }
  async OnUploadFile($event :any)
  {
    this.file = $event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        if(reader.result != undefined)
        this.item.FileContent = reader.result
      },
      false
    );
    if (this.file) {
      reader.readAsText(this.file);
    }
    this.item.FileContent = await this.content?.toString();
  }
  async save(){
    this.item.Name = this.formUpload.value.NameFile;
    this.item.FileType = this.file?.type ?? "No type";
    console.log(this.item);
    debugger;
    let result = await this._uploadService.uploadFile(this.item);

    console.log(result);
    result.subscribe((data : any) => {
      console.log(data);
    },(error : any) => {
      console.log(error);
    });
  }
}
