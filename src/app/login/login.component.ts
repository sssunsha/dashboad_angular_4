import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { routerTransition } from '../router.animations';
import { BUCKET, DAILY_FOLDER, REGION } from '../shared/configuration/configuration';
import * as COS from 'cos-js-sdk-v5';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
	secretId: string;
	secretKey: string;
	cos;
	constructor(public router: Router,
				private http: HttpClient) {}

    ngOnInit() {
	}

    onLoggedin() {
		this.checkLogin();
        localStorage.setItem('isLoggedin', 'false');
	}
	
	checkLogin() {
	}
}
