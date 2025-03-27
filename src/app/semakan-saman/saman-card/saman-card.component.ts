import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-saman-card',
  imports: [],
  templateUrl: './saman-card.component.html',
  styleUrl: './saman-card.component.css'
})
export class SamanCardComponent {
  @Input() plate!: string;
  @Input() summonId!: string;
  @Input() date!: string;
}
