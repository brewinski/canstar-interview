import { Component, OnInit, Input } from '@angular/core';
import { User, Company, Address } from '../../models/models';

@Component({
  selector: 'app-usercard-widget',
  templateUrl: './usercard-widget.component.html',
  styleUrls: ['./usercard-widget.component.css']
})
export class UsercardWidgetComponent implements OnInit {

  @Input() user: User;
  public address: Address;
  public company: Company

  constructor() { }

  ngOnInit() {
    this.address = this.user.address;
    this.company = this.user.company;
  }

}
