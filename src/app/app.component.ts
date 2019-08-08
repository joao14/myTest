import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      identificacion: ['',[Validators.required,Validators.min(0), Validators.max(13)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(13)]],
      celular: ['', [Validators.required, Validators.minLength(10)]],
      direccion: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log("Guardando");
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
