import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthService } from '@services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''};

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.signIn(this.user.username, this.user.password).subscribe(result => {
      if (!result.token) {
        this.snackBar.open('Usuario y/o contraseña incorrectos', 'Aceptar', {
          duration: 3000
        });
      } else {
        this.dialogRef.close();
        this.snackBar.open(`Bienvenido ${result.result}!`, 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

}
