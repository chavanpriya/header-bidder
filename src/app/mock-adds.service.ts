import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAddsService {

  constructor() { }

  public getAdds(): Observable<any[]> {
    let adds = [];
    for (let i = 0; i < 10; i++) {
      adds.push({
        'cpi': Math.random() * 100,
        'url': 'http://www.xyz.com/' + i
      });
    }
    return of(adds);
  }
}
