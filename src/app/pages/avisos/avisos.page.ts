import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trashOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
  standalone: true,
  imports: [IonItem, 
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

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('avisos');
    this.avisos = data ? JSON.parse(data) : [];
  }

  eliminarAviso(avisoEliminar: any) {
    this.avisos = this.avisos.filter(aviso => aviso !== avisoEliminar);
    localStorage.setItem('avisos', JSON.stringify(this.avisos));
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
