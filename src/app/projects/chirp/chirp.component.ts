import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chirp',
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.css']
})
export class ChirpComponent implements OnInit{
  ngOnInit(): void {
    let images: any = document.querySelectorAll('.user-avatar')
    let value = 0;

    for (let i = 1; i < images.length; i++) {
        images[i].style.marginLeft = `${value += 20}px`
    }
  }
}
