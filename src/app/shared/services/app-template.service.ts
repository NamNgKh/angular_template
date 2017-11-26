import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TemplateType } from '../models/template-type';

export class AppTemplateService {

  static chanel: Subject<TemplateType> = new Subject();

}
