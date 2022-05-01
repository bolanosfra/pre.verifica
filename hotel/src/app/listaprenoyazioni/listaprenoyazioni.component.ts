import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Room } from '../models/room.model';

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

  mostraDett(room : Room)
  {
    console.log(room)
  }

}
