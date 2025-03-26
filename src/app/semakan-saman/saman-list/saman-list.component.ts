import { Component } from '@angular/core';
import { SamanCardComponent } from '../saman-card/saman-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saman-list',
  imports: [SamanCardComponent, CommonModule],
  templateUrl: './saman-list.component.html',
  styleUrl: './saman-list.component.css',
  standalone:true,
})
export class SamanListComponent {

  sigma = [
    { plate: 'VLM 6078', summonId: '546546', date: '10/4/2023' },
    { plate: 'WSC 1154', summonId: '533546', date: '10/4/2023' },
  ];
}
