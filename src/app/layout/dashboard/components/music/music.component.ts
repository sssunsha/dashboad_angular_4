import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 
declare var skPlayer:any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

	iframe: SafeResourceUrl;
	constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
	var player = new skPlayer({
		autoplay: true,
		music: {
			type: 'cloud',
			source: 2645487009
		}
	});
  }

}
