import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  receivedUsername!: string;
  selectedSegment: string = 'mis-datos';

  constructor(private route: ActivatedRoute) {
    addIcons({ logoIonic });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.receivedUsername = params['user']; 
    });
  }
  }


