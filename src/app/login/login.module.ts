import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	imports: [CommonModule,
			HttpClientModule,
			LoginRoutingModule,
			FormsModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
