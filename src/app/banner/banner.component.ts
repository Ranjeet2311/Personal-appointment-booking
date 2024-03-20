import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() direction: string = '';
  @Input() btnText: string = '';
  @Input() bannerText: string = '';
}
