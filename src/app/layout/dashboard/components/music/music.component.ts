import { Component, OnInit } from '@angular/core';
declare var skPlayer:any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
	constructor() { }

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
