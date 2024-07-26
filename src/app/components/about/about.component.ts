import { Component } from '@angular/core';

interface About {
  title: string;
  content: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  aboutItems: About[] = [
    {
      title: 'Mission',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat
      obcaecati maxime officia laborum laboriosam repellat eveniet reiciendis
      voluptatem itaque debitis, veritatis id, unde deleniti ab dignissimos
      eius, tempore sapiente rem iste magnam animi distinctio tempora!
      Repudiandae itaque, magni atque voluptate quas natus explicabo dicta
      inventore magnam earum sed facilis!`,
    },
    {
      title: 'Vision',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat
      obcaecati maxime officia laborum laboriosam repellat eveniet reiciendis
      voluptatem itaque debitis, veritatis id, unde deleniti ab dignissimos
      eius, tempore sapiente rem iste magnam animi distinctio tempora!
      Repudiandae itaque, magni atque voluptate quas natus explicabo dicta
      inventore magnam earum sed facilis!`,
    },
    {
      title: 'our story',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat
      obcaecati maxime officia laborum laboriosam repellat eveniet reiciendis
      voluptatem itaque debitis, veritatis id, unde deleniti ab dignissimos
      eius, tempore sapiente rem iste magnam animi distinctio tempora!
      Repudiandae itaque, magni atque voluptate quas natus explicabo dicta
      inventore magnam earum sed facilis!`,
    },
  ];
}
