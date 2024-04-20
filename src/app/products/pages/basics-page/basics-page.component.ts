import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'juan carlos';
  public nameUpper: string = 'JUAN CARLOS';
  public fullName: string = 'jUaN cArLoS';

}
