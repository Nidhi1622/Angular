import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent {

  constructor(public dialog: MatDialog) { }



  openDialog() {

    this.dialog.open(DialogElementsExampleDialog);

  }



}

@Component({

  selector: 'app-Dialog',

  templateUrl: './Dialog.html',



})

export class DialogElementsExampleDialog {

  constructor(

    public dialogRef: MatDialogRef<DialogElementsExampleDialog>

  ) { }



  closeDialog() {

    this.dialogRef.close();



  }

}