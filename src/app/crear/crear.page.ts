import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  
  
  selectedRole: string = '';
  public nombreNombre: string = ' ';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
    
  }

  
  navigateBasedOnRole() {
    if (this.selectedRole === 'busco') {
      this.navCtrl.navigateForward('/usuario');
    } else if (this.selectedRole === 'arriendo') {
      this.navCtrl.navigateForward('/arriendo');
    } else {
      // Opcional: Manejar el caso donde no se seleccionó ningún rol
      console.log('Por favor, selecciona un rol.');}
      
      addIcons({ logoIonic });

}

}