import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  public titulo: string;
  constructor() {
    this.titulo = "Todos los derechos reservados ® 2021"
   }

  ngOnInit(): void {
  }

}
