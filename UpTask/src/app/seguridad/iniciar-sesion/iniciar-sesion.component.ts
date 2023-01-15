import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup = this.fb.group({})

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

}
