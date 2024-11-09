import { Component, OnInit } from '@angular/core';
import { CrudfirebaseService } from 'src/app/servicios/crudfirebase.service';  // Importación del servicio de CRUD para Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuariosfirebase',
  templateUrl: './usuariosfirebase.component.html',
  styleUrls: ['./usuariosfirebase.component.scss'],
})
export class UsuariosfirebaseComponent  implements OnInit {

  email: string = ''; // Variable para almacenar el correo electrónico ingresado por el usuario
  password: string = ''; // Variable para almacenar la contraseña ingresada por el usuario
  user: any = null; // Variable para almacenar el usuario autenticado

  constructor(private crudService: CrudfirebaseService,private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void { 
    this.loadUser(); // Cargar información del usuario actual al iniciar el componente
  }

  async addUser() {
    if (this.email && this.password) { // Verifica si se ha ingresado un correo y una contraseña
      await this.crudService.addUser(this.email, this.password); // Llama al servicio para agregar un usuario
      this.email = ''; // Limpia el campo de correo electrónico
      this.password = ''; // Limpia el campo de contraseña
      this.loadUser(); // Refresca la lista de usuarios
    } else {
      alert('Por favor, ingresa un correo y contraseña.'); // Muestra un mensaje si faltan datos
    }
  }

  // Método para eliminar al usuario autenticado actual
  async deleteUser() {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este usuario?'); // Confirmación de eliminación
    if (confirmDelete) {
      await this.crudService.deleteUser(); // Llama al servicio para eliminar el usuario actual
      this.user = null; // Limpia el usuario mostrado
    }
  }

  // Cargar el usuario autenticado actual
  async loadUser() {
    this.user = await this.crudService.getUser(); // Llama al servicio para obtener el usuario autenticado
  }

  


}
