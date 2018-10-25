import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
			CommonModule,
			FormsModule,
			GridRoutingModule,
			PageHeaderModule],
    declarations: [GridComponent]
})
export class GridModule {}
