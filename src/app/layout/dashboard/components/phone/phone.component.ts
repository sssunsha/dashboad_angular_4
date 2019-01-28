import { Component, OnInit } from '@angular/core';
import { Phone } from '../../dashboard.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
	
	phoneList: Array<Phone>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.fetchPhoneData();
  }

  fetchPhoneData(): void {
	  this.http.get<Array<Phone>>('assets/config/phone/dashboard-phone-config.json')
	  .subscribe(data => this.phoneList = data);
  }

  handleClick(item: Phone): void {
	window.location.href = 'tel://' + item.tel;
  }

}
