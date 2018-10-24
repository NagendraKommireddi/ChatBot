import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material'
@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.styl']
})
export class DialogViewComponent implements OnInit {

  constructor(public dailog:MatDialog) { }

  ngOnInit() {
  }
  openDialog():void{
    const dialogRef=this.dailog.open(DialogOverView,
      {
        width:'500px',
        height:'500px',
        data:{}
      }
    );

  }
}
@Component({
  selector:'app-chatbot-dialog',
  templateUrl:'dialog-overview.html'
})
export class DialogOverView{
  constructor(
    public dialogRef:MatDialogRef<DialogOverView>){
    }
  
close(){
  this.dialogRef.close()
}
}
