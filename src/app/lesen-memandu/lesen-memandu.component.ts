import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesen-memandu',
  templateUrl: './lesen-memandu.component.html',
  styleUrls: ['./lesen-memandu.component.css']
})
export class LesenMemanduComponent implements OnInit {
  licenseInfo = {
    name: 'Syafiqa Aneesa Binti Johari',
    expiryDate: '09 November 2021',
    location: 'Semenanjung',
    status: 'BERKUAT KUASA',
    qrCode: 'assets/qrcode.png',
    licenseImage: 'assets/license-sample.png'
  };

  constructor() {}

  ngOnInit(): void {}

  renewLicense() {
    alert('Functionality to renew license will be implemented.');
  }
}
``
