import { Component } from '@angular/core';
import { TemplateType } from './shared/models/template-type';
import { AppTemplateService } from './shared/services/app-template.service';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  templateType = TemplateType;
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      console.log(params['template']);
      if (params['template']) {
        this.onChangeTemplate(Number(params['template']));
      }
    });
  }

  onChangeTemplate(type: TemplateType) {
    AppTemplateService.chanel.next(type);
  }
}
