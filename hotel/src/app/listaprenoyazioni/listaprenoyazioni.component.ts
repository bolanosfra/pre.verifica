import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-listaprenoyazioni',
  templateUrl: './listaprenoyazioni.component.html',
  styleUrls: ['./listaprenoyazioni.component.css']
})
export class ListaprenoyazioniComponent implements OnInit {

  constructor() { }
  @Input() listapreno : Booking[] = undefined!;


  ngOnInit(): void {
  }

}
