import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Service {
  id: string;
  title: string;
  pricing: number | string;
  content: string;
}

@Component({
  selector: 'app-dynamic-services-route',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-services-route.component.html',
})
export class DynamicServicesRouteComponent {
  paramsId: any = '';

  dynamicServicesData: Service[] = [
    {
      id: 'branding',
      title: 'branding',
      pricing: 'contact sales',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit iure quaerat eos dicta, nobis, ducimus necessitatibus reiciendis magnam molestias repellendus dolor enim id natus! Enim, nobis voluptatem? Quae ex repellat non provident! Temporibus mollitia eum veritatis sint, distinctio, aliquam in officia laudantium fugiat odit doloribus corrupti beatae asperiores incidunt reiciendis et explicabo? Exercitationem nesciunt numquam quos alias, voluptate voluptates omnis voluptas veritatis ipsum facilis sapiente eos laudantium laborum corporis sequi, reprehenderit accusamus natus repellendus ullam dignissimos ut quas? Eveniet perspiciatis, excepturi sunt vero nihil dolore repudiandae ab molestiae possimus delectus cupiditate inventore quod saepe at corporis provident quae eligendi distinctio beatae nulla nesciunt est neque rerum? Dolore ab accusantium ea suscipit. Culpa perspiciatis veniam magni eos vel voluptas, ipsa adipisci delectus sunt, quisquam reiciendis iure iste, quam id! Optio dolorum explicabo et officia odio assumenda asperiores fugiat? Qui vero accusamus, animi eaque suscipit ullam ratione ex atque velit aut laudantium excepturi assumenda nemo veniam neque magnam ut fugiat laboriosam tenetur officia repellat itaque dolore asperiores voluptatum. Sed, molestias blanditiis necessitatibus possimus saepe in harum atque hic minima animi quasi alias aspernatur nesciunt corrupti exercitationem aliquam ipsam quia earum unde. Nesciunt in sunt veritatis? Eum vero quos assumenda hic tenetur!',
    },
    {
      id: 'web',
      title: 'web development',
      pricing: 'contact sales',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit iure quaerat eos dicta, nobis, ducimus necessitatibus reiciendis magnam molestias repellendus dolor enim id natus! Enim, nobis voluptatem? Quae ex repellat non provident! Temporibus mollitia eum veritatis sint, distinctio, aliquam in officia laudantium fugiat odit doloribus corrupti beatae asperiores incidunt reiciendis et explicabo? Exercitationem nesciunt numquam quos alias, voluptate voluptates omnis voluptas veritatis ipsum facilis sapiente eos laudantium laborum corporis sequi, reprehenderit accusamus natus repellendus ullam dignissimos ut quas? Eveniet perspiciatis, excepturi sunt vero nihil dolore repudiandae ab molestiae possimus delectus cupiditate inventore quod saepe at corporis provident quae eligendi distinctio beatae nulla nesciunt est neque rerum? Dolore ab accusantium ea suscipit. Culpa perspiciatis veniam magni eos vel voluptas, ipsa adipisci delectus sunt, quisquam reiciendis iure iste, quam id! Optio dolorum explicabo et officia odio assumenda asperiores fugiat? Qui vero accusamus, animi eaque suscipit ullam ratione ex atque velit aut laudantium excepturi assumenda nemo veniam neque magnam ut fugiat laboriosam tenetur officia repellat itaque dolore asperiores voluptatum. Sed, molestias blanditiis necessitatibus possimus saepe in harum atque hic minima animi quasi alias aspernatur nesciunt corrupti exercitationem aliquam ipsam quia earum unde. Nesciunt in sunt veritatis? Eum vero quos assumenda hic tenetur!',
    },
    {
      id: 'mobile',
      title: 'mobile development',
      pricing: 'contact sales',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit iure quaerat eos dicta, nobis, ducimus necessitatibus reiciendis magnam molestias repellendus dolor enim id natus! Enim, nobis voluptatem? Quae ex repellat non provident! Temporibus mollitia eum veritatis sint, distinctio, aliquam in officia laudantium fugiat odit doloribus corrupti beatae asperiores incidunt reiciendis et explicabo? Exercitationem nesciunt numquam quos alias, voluptate voluptates omnis voluptas veritatis ipsum facilis sapiente eos laudantium laborum corporis sequi, reprehenderit accusamus natus repellendus ullam dignissimos ut quas? Eveniet perspiciatis, excepturi sunt vero nihil dolore repudiandae ab molestiae possimus delectus cupiditate inventore quod saepe at corporis provident quae eligendi distinctio beatae nulla nesciunt est neque rerum? Dolore ab accusantium ea suscipit. Culpa perspiciatis veniam magni eos vel voluptas, ipsa adipisci delectus sunt, quisquam reiciendis iure iste, quam id! Optio dolorum explicabo et officia odio assumenda asperiores fugiat? Qui vero accusamus, animi eaque suscipit ullam ratione ex atque velit aut laudantium excepturi assumenda nemo veniam neque magnam ut fugiat laboriosam tenetur officia repellat itaque dolore asperiores voluptatum. Sed, molestias blanditiis necessitatibus possimus saepe in harum atque hic minima animi quasi alias aspernatur nesciunt corrupti exercitationem aliquam ipsam quia earum unde. Nesciunt in sunt veritatis? Eum vero quos assumenda hic tenetur!',
    },
    {
      id: 'game',
      title: 'game development',
      pricing: 'contact sales',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit iure quaerat eos dicta, nobis, ducimus necessitatibus reiciendis magnam molestias repellendus dolor enim id natus! Enim, nobis voluptatem? Quae ex repellat non provident! Temporibus mollitia eum veritatis sint, distinctio, aliquam in officia laudantium fugiat odit doloribus corrupti beatae asperiores incidunt reiciendis et explicabo? Exercitationem nesciunt numquam quos alias, voluptate voluptates omnis voluptas veritatis ipsum facilis sapiente eos laudantium laborum corporis sequi, reprehenderit accusamus natus repellendus ullam dignissimos ut quas? Eveniet perspiciatis, excepturi sunt vero nihil dolore repudiandae ab molestiae possimus delectus cupiditate inventore quod saepe at corporis provident quae eligendi distinctio beatae nulla nesciunt est neque rerum? Dolore ab accusantium ea suscipit. Culpa perspiciatis veniam magni eos vel voluptas, ipsa adipisci delectus sunt, quisquam reiciendis iure iste, quam id! Optio dolorum explicabo et officia odio assumenda asperiores fugiat? Qui vero accusamus, animi eaque suscipit ullam ratione ex atque velit aut laudantium excepturi assumenda nemo veniam neque magnam ut fugiat laboriosam tenetur officia repellat itaque dolore asperiores voluptatum. Sed, molestias blanditiis necessitatibus possimus saepe in harum atque hic minima animi quasi alias aspernatur nesciunt corrupti exercitationem aliquam ipsam quia earum unde. Nesciunt in sunt veritatis? Eum vero quos assumenda hic tenetur!',
    },
  ];

  activeDynamicData: Service[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(
      (params) => (this.paramsId = params.get('id'))
    );
    this.activeDynamicData = this.dynamicServicesData.filter(
      (items) => items.id === this.paramsId
    );
  }

  goBack() {
    this.router.navigateByUrl('/services');
  }
}
