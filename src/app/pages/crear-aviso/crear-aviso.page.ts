import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonText, IonButtons, IonIcon, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonButton,
    IonText,
    IonButtons,
    IonIcon,
    IonInput,
    IonTextarea
  ]
})
export class CrearAvisoPage implements OnInit {
  avisoForm!: FormGroup;
  arrowBack = arrowBackOutline;

  previewUrl: string | ArrayBuffer | null = null;
  imagenBase64: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.avisoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.imagenBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  guardarAviso() {
    if (this.avisoForm.valid) {
      const fechaActual = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

      const aviso = {
        ...this.avisoForm.value,
        imagen: this.imagenBase64,
        fechaCreacion: fechaActual
      };

      const avisos = JSON.parse(localStorage.getItem('avisos') || '[]');
      avisos.push(aviso);
      localStorage.setItem('avisos', JSON.stringify(avisos));

      this.router.navigate(['/avisos']);
    } else {
      console.log('Formulario inválido');
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
