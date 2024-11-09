import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
    
    value = 'Clear me';
    usuario: string = ''; 
    clave: string = ''; 
    errors: string[] = [];
  
  
  public nombreNombre: string = ' ';

  constructor(private router: Router, private authService: AuthService) { 
    addIcons({ logoIonic });
  }
  async login() {
    if (this.usuario && this.clave) {
      const isAuthenticated = await this.authService.signIn(this.usuario, this.clave);
      
      // Solo navegamos si la autenticación fue exitosa
      if (isAuthenticated) {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            user: this.usuario, // Envío dato del input Usuario
          },
        };
        this.router.navigate(['home'], navigationExtras); // Navega a Home y envía el dato del input Usuario
      }
    } else {
      alert('Por favor, ingresa tu correo y contraseña.');
    }
    }
  ngOnInit() {}

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;  
  }

  validadorDatos() {
    this.errors = [];
    console.log(this.usuario.trim())
    console.log("hola")
    
    if (this.usuario.trim() === '') {
      console.log("pae aqui")
      this.errors.push('Usuario es requerido');
    }
    if (this.clave.trim() === '') {
      console.log("y aqui")
      this.errors.push('Clave es requerida');
    }

  
  if (this.errors.length === 0) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user: this.usuario, 
      },
    };
    this.router.navigate(['home'], navigationExtras); 
  }
}
  }

  



