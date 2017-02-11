import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  title: string;
  message: string;
  option1: string;
  option2: string;
  option1Action: () => any;
  option2Action: () => any;

  constructor(public dialogRef: MdDialogRef<ConfirmationDialogComponent>) {}

  option1Click(): void {
    if (this.option1Action) {
      this.option1Action();
    }

    this.dialogRef.close(this.option1);
  }

  option2Click(): void {
    if (this.option2Action) {
      this.option2Action();
    }

    this.dialogRef.close(this.option2);
  }
}
