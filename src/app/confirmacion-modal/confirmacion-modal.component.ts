import { Component, Input } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonModal } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacion-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Confirmar Eliminación</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="cancelar()">Cancelar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>¿Estás seguro de que deseas eliminar la publicación "{{ aviso.titulo }}"?</p>
      <ion-button expand="block" color="danger" (click)="confirmar()">Eliminar</ion-button>
    </ion-content>
  `,
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent
  ]
})
export class ConfirmacionModalComponent {
  @Input() aviso: any;

  constructor(private modalController: ModalController) {}

  confirmar() {
    this.modalController.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalController.dismiss({ confirmado: false });
  }
}
