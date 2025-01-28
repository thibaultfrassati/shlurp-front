import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../../services/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list-component',
  templateUrl: './customer-list-component.component.html',
  imports: [CommonModule],

  styleUrl: './customer-list-component.component.scss'
})

export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() : void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}