import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { BUCKET, DAILY_FOLDER, REGION } from '../shared/configuration/configuration';
// import * as COS from 'cos-nodejs-sdk-v5';

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
	constructor(public router: Router) {}

    ngOnInit() {
	}

    onLoggedin() {
		this.checkLogin();
        localStorage.setItem('isLoggedin', 'false');
	}
	
	checkLogin() {
		// this.cos = new COS({
		// 	SecretId: this.secretId,
		// 	SecretKey: this.secretKey,
		// });
		// // check get COS bucket
		// this.cos.getBucketCors({
		// 	Bucket: BUCKET,
		// 	Region: REGION,
		// }, (err, data) => {
		// 	console.log(err || data);
		// });
	}
}
