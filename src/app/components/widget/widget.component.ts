import { Component, OnInit } from '@angular/core';
import { User } from '../../models/models';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  public exampleUser: User = {
    id: 1,
    name: "Chris Brewin",
    username: "Brewinski",
    email: "cbrewin1234@1234.com",
    address: {
      street: "Fake Street",
      suite: "Aprt 123",
      city: "Brisbane",
      zipcode: "1234",
      geo: {
        lat: 0, 
        lng: 0,
      }
    },
    phone: "1234-1234-1234",
    website: "www.google.com.au",
    company: {
      name: "Canstar",
      catchPhrase: "",
      bs: "",
    },  
  }

  constructor() { }

  ngOnInit() {
  }

}
