import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { FormsRoutes } from './forms.routing';
import { WizardComponent } from './wizard/wizard.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { SpouseInfoComponent } from './spouse-info/spouse-info.component';
import { JobHistoryInfoComponent } from './job-history-info/job-history-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EductionalInfoComponent } from './eductional-info/eductional-info.component';
import { CommunicationInfoComponent } from './communication-info/communication-info.component';
import { NomineeInfoComponent } from './nominee-info/nominee-info.component';
import { DependentInfoComponent } from './dependent-info/dependent-info.component';
import { ReferenceInfoComponent } from './reference-info/reference-info.component';
import { EmergencyContactInfoComponent } from './emergency-contact-info/emergency-contact-info.component';
import { PersonalComponent } from './personal-info/personal.component';
import { ReferenceComponent } from './reference-info/referencecomponent';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    FileUploadModule,
    RouterModule.forChild(FormsRoutes),
    MatButtonToggleModule,
  ],
  declarations: [
    RichTextEditorComponent,
    FileUploadComponent,
    WizardComponent, 
    BasicFormComponent, 
    BasicInfoComponent, 
    BankInfoComponent, 
    SpouseInfoComponent, 
    JobHistoryInfoComponent, 
    PersonalInfoComponent, 
    EductionalInfoComponent, 
    CommunicationInfoComponent, 
    NomineeInfoComponent, 
    DependentInfoComponent, 
    ReferenceInfoComponent, 
    EmergencyContactInfoComponent,
    PersonalComponent,
    ReferenceComponent
  ],
})
export class AppFormsModule { }
