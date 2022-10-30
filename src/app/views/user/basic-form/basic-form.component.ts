import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { FileUploadService } from 'app/shared/file-upload.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  // formData = {}
  // console = console;
  // basicForm: UntypedFormGroup;

  // constructor() { }

  // ngOnInit() {
  //   let password = new UntypedFormControl('', Validators.required);
  //   let confirmPassword = new UntypedFormControl('');

  //   this.basicForm = new UntypedFormGroup({
  //     username: new UntypedFormControl('', [
  //       Validators.minLength(4),
  //       Validators.maxLength(9)
  //     ]),
  //     firstname: new UntypedFormControl('', [
  //       Validators.required
  //     ]),
  //     email: new UntypedFormControl('', [
  //       Validators.required,
  //       Validators.email
  //     ]),
  //     website: new UntypedFormControl(''),
  //     date: new UntypedFormControl(),
  //     cardno: new UntypedFormControl(''),
  //     password: password,
  //     confirmPassword: confirmPassword,
  //     gender: new UntypedFormControl(''),
  //     agreed: new UntypedFormControl('', (control: UntypedFormControl) => {
  //       const agreed = control.value;
  //       if(!agreed) {
  //         return { agreed: true }
  //       }
  //       return null;
  //     })
  //   })
  // }


  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          // Short link via api response
          this.shortLink = event.link;

          this.loading = false;
        }
      }
    );
  }
}