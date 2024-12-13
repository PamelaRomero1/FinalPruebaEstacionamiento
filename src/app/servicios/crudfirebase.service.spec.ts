import { TestBed } from '@angular/core/testing';

import { CrudfirebaseService } from './crudfirebase.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('CrudfirebaseService', () => {
  let service: CrudfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      providers: [CrudfirebaseService]
    });
    service = TestBed.inject(CrudfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
