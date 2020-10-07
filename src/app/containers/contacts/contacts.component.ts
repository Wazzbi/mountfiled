import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  @ViewChild('alert', { static: true }) alert: ElementRef;
  @ViewChild('map', {static: true}) mapElement: any;

  // in case of trouble
  // https://stackoverflow.com/questions/51677452/angular-6-application-cannot-find-namespace-google/51677731
  // https://medium.com/@jkeung/integrating-google-maps-api-w-angular-7-e7672396ce2d
  map: google.maps.Map;
  email: string = '';
  text: string = '';

  persons: any[] = [
    {
      photo: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      name: 'Peter Parker',
      email: 'spidee@lol.cy',
      tel: '723 568 145'
    },
    {
      photo: 'https://images.unsplash.com/photo-1571208756906-92fea1cc1087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      name: 'Adam Simson',
      email: 'guelet@famous.de',
      tel: '729 569 436'
    },
    {
      photo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
      name: 'Susan Hallen',
      email: 'suzz@qmail.com',
      tel: '723 568 999'
    }
  ];

  ngOnInit(): void {
    const mapProperties = {
         center: new google.maps.LatLng( 50.049312, 14.436790 ),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
 }

  openAlert(): void {
    this.alert.nativeElement.classList.add('show');
  }

  closeAlert(): void {
    this.alert.nativeElement.classList.remove('show');
  }

  onSubmit(): void{
    const data: any = {email: this.email, text: this.text};
    console.log(data);
    this.openAlert()
  }
}
