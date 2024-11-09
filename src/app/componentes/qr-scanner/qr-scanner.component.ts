import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent  implements OnInit {
  scannedData: string | null = null;
  qrCodeData: string = '';
  generatedQRCode: string = '';

  constructor(private router: Router) { }
  async scanQrCode() {
    // Solicitar permisos y preparar el escáner
    await BarcodeScanner.checkPermission({ force: true });

    // Iniciar el escaneo del código QR
    const result = await BarcodeScanner.startScan();

    // Comprobar si se escaneó correctamente
    if (result.hasContent) {
      this.scannedData = result.content; // Guardar el contenido escaneado
      console.log('Contenido escaneado:', this.scannedData);
      // Verificar si el contenido es un enlace y redirigir
      if (this.isValidUrl(this.scannedData)) {
        window.open(this.scannedData, '_blank');  // Abre el enlace en una nueva pestaña
      }
    }
  }
  descargarQR() {
    if (this.scannedData) {
      const blob = new Blob([this.scannedData], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qr-code.txt';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
  // Función para validar si el contenido escaneado es una URL válida
  isValidUrl(url: string): boolean {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocolo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // IP (v4) dirección
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // puerto y ruta
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // cadena de consulta
      '(\\#[-a-z\\d_]*)?$','i'); // fragmento de anclaje
    return !!urlPattern.test(url);
  }
  // Función para generar código QR
  generateQRCode() {
    QRCode.toDataURL(this.qrCodeData, { errorCorrectionLevel: 'H' })
      .then((url: string) => {
        this.generatedQRCode = url;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  ngOnInit() {}

}
