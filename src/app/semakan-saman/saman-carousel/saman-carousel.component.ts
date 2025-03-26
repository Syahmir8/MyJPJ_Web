import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlickCarouselModule} from 'ngx-slick-carousel'

@Component({
  selector: 'app-saman-carousel',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './saman-carousel.component.html',
  standalone: true,
  styleUrl: './saman-carousel.component.css'
})
export class SamanCarouselComponent {

  samanList = [
    {
      plateNumber: 'WSC 1154',
      id: '533546',
      date: '10/4/2023',
      time: '5:45 PtG',
      location: 'Lebuhraya KL',
      offense: 'Memandu macam org gila',
    },
    {
      plateNumber: 'VLM 6078',
      id: '546546',
      date: '10/4/2023',
      time: '5:45 PtG',
      location: 'Lebuhraya KL',
      offense: 'Memandu macam org gila',
    },
    {
      plateNumber: 'ABC 1234',
      id: '987654',
      date: '12/5/2023',
      time: '6:00 PtG',
      location: 'Jalan Tun Razak',
      offense: 'Langgar lampu merah',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: true, // Show left/right arrows
    adaptiveHeight: true,
  };
  
}
