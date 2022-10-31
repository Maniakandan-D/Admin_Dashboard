import { Routes } from '@angular/router';

import { BasicFormComponent } from './profile/basic-form/basic-form.component';
import { RichTextEditorComponent } from './profile/rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './profile/file-upload/file-upload.component';
import { ProfileComponent } from './profile/profile/profile.component';

export const UserRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: BasicFormComponent,
        data: { title: 'Table', breadcrumb: 'Table' }
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