
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
// import { Customer } from '@models/customer.model';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/api/customers'; // URL de ton backend

  constructor() {}
  private http = inject(HttpClient);
  private customers = signal<Customer[]>([])
  readonly url = 'https://jsonplaceholder.typicode.com/users';
  
  getCustomers() {
    // return this.http.get<Customer[]>(this.url); 
    return this.http.get<Customer[]>(this.apiUrl).pipe(
      tap((customers: Customer[]) => {console.log(customers);this.customers.set(customers)})
    );
  }
}
