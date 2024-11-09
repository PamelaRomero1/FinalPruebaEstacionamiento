import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {
  experienciaLaboral = {
    empresa: '',
    anoInicio: null,
    anoTermino: null,
    cargo: ''
  };
  

  constructor(private firestore: AngularFirestore,
    private afAuth: AngularFireAuth) { }
    

    async ngOnInit() {
      const user = await this.afAuth.currentUser;
    if (user) {
      this.firestore
        .collection('experienciaLaboral')
        .doc(user.uid)
        .get()
        .subscribe((doc) => {
          if (doc.exists) {
            this.experienciaLaboral = doc.data() as any;
          }
        });
    }
  }

  async guardarExperienciaLaboral() {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.firestore
        .collection('experienciaLaboral')
        .doc(user.uid)
        .set({
          empresa: this.experienciaLaboral.empresa,
          anoInicio: this.experienciaLaboral.anoInicio,
          anoTermino: this.experienciaLaboral.anoTermino,
          cargo: this.experienciaLaboral.cargo,
          userId: user.uid
        }, { merge: true })
        .then(() => console.log("Datos guardados exitosamente"))
        .catch((error) => console.error("Error guardando datos:", error));
        
        
      }
      
    }
  }

  


