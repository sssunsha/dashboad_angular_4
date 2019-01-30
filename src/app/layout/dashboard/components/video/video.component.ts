import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
	@ViewChild('myIframe') 
	myIframe: ElementRef<any>;
	@ViewChild('document')
	document: ElementRef<any>;
  constructor(
	  ) { }

  ngOnInit() {
	  
  }

  ngAfterViewInit() {
  }

  load(): void {
	this.myIframe.nativeElement.querySelector('.mod-pl-right').hidden = 'true';
  }
}
