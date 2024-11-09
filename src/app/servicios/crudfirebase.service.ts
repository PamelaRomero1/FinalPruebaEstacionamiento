import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  async addUser(email: string, password: string): Promise<void> {
    try {
       // Crear un nuevo usuario con email y contraseña usando Firebase
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Imprimir en consola la información del usuario creado
      console.log('Usuario agregado:', userCredential.user);
    } catch (error: any) { // Hacer un casting del error a 'any'
     // Imprimir en consola el error ocurrido al agregar el usuario
      console.error('Error al agregar usuario:', error);
      // Mostrar una alerta con el mensaje de error
      alert('No se pudo agregar el usuario: ' + error.message);
    }
  }

  // Método asíncrono para eliminar al usuario autenticado actualmente
  async deleteUser(): Promise<void> {
    try {
      // Obtener el usuario autenticado actualmente
      const user = await this.afAuth.currentUser;
      if (user) {
        // Eliminar el usuario actual si está autenticado
        await user.delete();
        // Imprimir en consola que el usuario ha sido eliminado
        console.log('Usuario eliminado');
        // Mostrar una alerta confirmando la eliminación exitosa del usuario
        alert('Usuario eliminado exitosamente');
        // Redirigir al usuario a la página principal
        this.router.navigate(['/']);
      }
    } catch (error: any) { // Hacer un casting del error a 'any'
      console.error('Error al eliminar usuario:', error);
      alert('No se pudo eliminar el usuario: ' + error.message);
    }
  }

  // Método asíncrono para obtener la información del usuario autenticado actualmente
  async getUser(): Promise<any> {
    try {
      // Obtener el usuario autenticado actualmente
      const user = await this.afAuth.currentUser;
      if (user) {
        // Si existe el usuario, devolver su información
        return user;
      } else {
        // Si no existe usuario autenticado, devolver null
        return null;
      }
    } catch (error: any) { // Hacer un casting del error a 'any'
      console.error('Error al obtener usuario:', error);
      return null;
    }
  }

  // Método asíncrono para cerrar la sesión del usuario autenticado actualmente
  async signOut(): Promise<void> {
    try {
      // Cerrar sesión usando Firebase Authentication
      await this.afAuth.signOut();
      // Imprimir en consola que la sesión ha sido cerrada
      console.log('Sesión cerrada');
      // Redirigir al usuario a la página de login
      this.router.navigate(['/login']);
    } catch (error: any) { // Hacer un casting del error a 'any'
      // Imprimir en consola el error ocurrido al cerrar sesión
      console.error('Error al cerrar sesión:', error);
    }
  }
}
