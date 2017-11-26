import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppComponent } from '../app-component';
import { TemplateType } from '../../models/template-type';

@Component({
  selector: 'app-my-component-1',
  templateUrl: './my-component-1.component.html',
  styleUrls: ['./my-component-1.component.scss']
})
export class MyComponent1Component extends AppComponent implements OnInit {

  @ViewChild('default') defaultTemplate: TemplateRef<any>;
  @ViewChild('template_1') template_1: TemplateRef<any>;

  constructor() {
    super();
  }

  ngOnInit() {
    this.registerTemplate(TemplateType.DEFAULT, this.defaultTemplate);
    this.registerTemplate(TemplateType.TEMPLATE_1, this.template_1);
  }

}
