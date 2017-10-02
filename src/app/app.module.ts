import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import {MatGridListModule, MatTooltipModule, MdPaginatorModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatSidenavModule, MatListModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TableComponent } from './components/table/table.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { DataPopulationComponent } from './components/data-population/data-population.component';
import { WidgetComponent } from './components/widget/widget.component';
import { CssComponent } from './components/css/css.component';
import { UsercardWidgetComponent } from './components/usercard-widget/usercard-widget.component';

const appRoutes: Routes = [
  {path: 'table-example', component: TableComponent},
  {path: 'widget-example', component: WidgetComponent},
  {path: 'css-example', component: CssComponent},  
  { 
    path: '',
    redirectTo: '/widget-example',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableComponent,
    PagenotfoundComponent,
    HomeComponent,
    DataPopulationComponent,
    WidgetComponent,
    CssComponent,
    UsercardWidgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MdPaginatorModule,
    MatTooltipModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
