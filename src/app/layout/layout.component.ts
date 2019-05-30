import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '@components/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  DEFAULT_USER = 'NO IDENTIFICADO';
  name: any;

  constructor(
    private dialog: MatDialog,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.name = this.auth.getName();
    // remove later
    this.auth.setLayout(this);
  }

  onLoginClick() {
    if (this.name) {
      this.auth.signOut();
      this.name = null;
    } else {
      this.dialog.open(LoginComponent);
    }
  }

  // Remove later
  public setUser(name) {
    this.name = name;
  }
}
