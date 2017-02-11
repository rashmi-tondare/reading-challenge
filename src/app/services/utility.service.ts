import { MdDialog } from '@angular/material';
import { ConfirmationDialogComponent } from './../widgets/confirmation-dialog/confirmation-dialog.component';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor(private dialog: MdDialog) { }

  displayErrorDialog(message: string, confirmationAction?: () => any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent);
    let dialogInstance = dialogRef.componentInstance;
    dialogInstance.title = 'Oops!';
    dialogInstance.message = message;
    dialogInstance.option1 = 'Ok';

    if (confirmationAction) {
      dialogInstance.option1Action = confirmationAction;
    }
  }
}
