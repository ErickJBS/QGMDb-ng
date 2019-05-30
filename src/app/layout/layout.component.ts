import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '@components/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent);
  }
}
