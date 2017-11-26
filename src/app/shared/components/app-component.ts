import { TemplateType } from '../models/template-type';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { AppTemplateService } from '../services/app-template.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

export class AppComponent implements OnDestroy {

    private _template: TemplateRef<any>;
    private templates = {};
    private _sub: Subscription;

    constructor() {
        this._sub = AppTemplateService.chanel.subscribe(type => {
            this._template = this.templates[type];
        });
    }

    get template(): TemplateRef<any> {
        if (!this._template) {
            return this.templates[TemplateType.DEFAULT];
        }
        return this._template;
    }

    registerTemplate(type: TemplateType, template: TemplateRef<any>) {
        this.templates[type] = template;
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
