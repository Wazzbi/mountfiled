import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor() { }

  articles: any[] = [
    {imgUrl: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', title: 'Title 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti ducimus numquam, autem molestiae repellat, eaque at voluptatibus alias dolorum quibusdam excepturi, consectetur sed earum obcaecati saepe eius. Accusantium ipsum at pariatur nesciunt possimus, corporis illo assumenda? Molestias autem doloremque, magni provident voluptates amet itaque enim sit, rerum dicta nobis necessitatibus dolorum dolorem natus sequi doloribus eaque veritatis ratione? Dignissimos.'},
    {imgUrl: 'https://images.unsplash.com/photo-1571208756906-92fea1cc1087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', title: 'Title 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti ducimus numquam, autem mione? Dignissimos.'},
    {imgUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80', title: 'Title 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corruptearum obcaecati saepe eius. Accusantium ipsum at pariatur nesciunt possimus, corporis illo assumenda? Molestias aubus dolorum dolorem natus sequi doloribusr sit amet consectetur adipisicing elit. Labore corrupti ducimus numquam, autem molestiae repellat, eaque at voluptatibus alias dolorum quibusdam excepturi, consectetur sed earum obcaecati saepe eius. Accusantium ipsum at pariatur nesciuitatibus dolorum dolorem natus sequi doloribus eaque veritatis ratione? Dignissimos.'}
  ];

  ngOnInit() {
  }

}
