import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello {{ hero }}</h1>`
})
export class AppComponent implements OnInit {

  @Input('hero') hero: any;

  ngOnInit(): void {
    console.log(this.hero);
  }

}
