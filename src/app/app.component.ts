import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../validators/CustomValidator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      type_indetificacion: ['', Validators.required],
      identificacion: ['', [Validators.required, CustomValidator.numberValidator]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      celular: ['', [Validators.required, Validators.minLength(10)]],
      direccion: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
    })
  }

  // Método uqe permite acceder de mejor manera los los valores de lo elementos
  get f() { return this.registerForm.controls; }

  //Metodo que permite enviar la informacion al servicio
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  //Metodo quqe permite resetear el formulario
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
