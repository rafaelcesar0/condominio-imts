import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apartamento } from '../interface/apartamento.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartamentosService {
  http = inject(HttpClient);

  getAll() {
    return lastValueFrom(
      this.http.get<Apartamento[]>('http://localhost:3000/apartamentos')
    );
  }

  // post(payload: ApartamnetoPayload) {
  //   return this.http.post('/api/apartamento', payload);
  // }

  // delete(id: number) {
  //   return this.http.delete(`/api/apartamento/${id}`);
  // }
}
