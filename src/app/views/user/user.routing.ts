import { Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProfileComponent } from './profile/profile.component';


export const UserRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicFormComponent,
        data: { title: 'Basic', breadcrumb: 'BASIC' }
      },
      {
        path: 'editor',
        component: RichTextEditorComponent,
        data: { title: 'Editor', breadcrumb: 'EDITOR' }
      }, {
        path: 'upload',
        component: FileUploadComponent,
        data: { title: 'Upload', breadcrumb: 'UPLOAD' }
      }, {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Profile', breadcrumb: 'PROFILE' }
      }]
  }
];