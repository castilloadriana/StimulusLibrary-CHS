import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface DialogData {
  pi_name: string;
  inst_name: string;
  study_sections: {
    AIMSQ: boolean;
    video_config: boolean;
    calibration: boolean;
    consent: boolean;
    exit_survey: boolean;
  };
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverviewExample {
  temp_pi_name = signal('');
  temp_inst_name = signal('');
  _formBuilder = inject(FormBuilder);
  temp_study_sections = this._formBuilder.group({
    AIMSQ: false,
    video_config: false,
    calibration: false,
    consent: false,
    exit_survey: false,
  });

  pi_name = signal('');
  inst_name = signal('');
  study_sections = this._formBuilder.group({
    AIMSQ: false,
    video_config: false,
    calibration: false,
    consent: false,
    exit_survey: false,
  });

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.temp_pi_name.set('');
    this.temp_inst_name.set('');
    this.temp_study_sections.reset({
      AIMSQ: false,
      video_config: false,
      calibration: false,
      consent: false,
      exit_survey: false,
    });

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        pi_name: this.temp_pi_name(),
        inst_name: this.temp_inst_name(),
        study_sections: this.temp_study_sections.value,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.pi_name.set(result.pi_name);
        this.inst_name.set(result.inst_name);
        this.study_sections.patchValue(result.study_sections);
      }
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrl: 'dialog-overview-example-dialog.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly pi_name = model(this.data.pi_name);
  readonly inst_name = model(this.data.inst_name);
  readonly formBuilder = inject(FormBuilder);
  readonly study_sections = this.formBuilder.group({
    AIMSQ: this.data.study_sections.AIMSQ,
    video_config: this.data.study_sections.video_config,
    calibration: this.data.study_sections.calibration,
    consent: this.data.study_sections.consent,
    exit_survey: this.data.study_sections.exit_survey,
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**  Copyright 2025 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
