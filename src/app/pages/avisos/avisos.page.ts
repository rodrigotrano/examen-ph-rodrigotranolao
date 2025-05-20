import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonCard, IonImg, ModalController } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trashOutline, arrowBackOutline } from 'ionicons/icons';
import { ConfirmacionModalComponent } from '../../confirmacion-modal/confirmacion-modal.component';


@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonIcon,
    IonButton,
    IonCard,
    IonImg
  ]
})
export class AvisosPage implements OnInit {
  arrowBack = arrowBackOutline;
  trash = trashOutline;
  avisos: any[] = [];

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    const data = localStorage.getItem('avisos');
    this.avisos = data ? JSON.parse(data) : [];
  }

  goHome() {
    this.router.navigate(['/']);
  }

  async abrirModalConfirmacion(aviso: any) {
    const modal = await this.modalController.create({
      component: ConfirmacionModalComponent,
      componentProps: { aviso },
      backdropDismiss: false,
      cssClass: 'confirmacion-modal'
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data && data.confirmado) {
      this.eliminarAviso(aviso);
    }
  }

  eliminarAviso(avisoEliminar: any) {
    this.avisos = this.avisos.filter(aviso => aviso !== avisoEliminar);
    localStorage.setItem('avisos', JSON.stringify(this.avisos));
  }
}
