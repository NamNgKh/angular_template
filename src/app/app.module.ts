import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MyComponent1Component } from './shared/components/my-component-1/my-component-1.component';
import { MyComponent2Component } from './shared/components/my-component-2/my-component-2.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

export const routes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    MyComponent1Component,
    MyComponent2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
