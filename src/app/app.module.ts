import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConcordanceComponent } from './concordance/concordance.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { SemanticsComponent } from './semantics/semantics.component';
import { FileServicesComponent } from './file-services/file-services.component';
import { ConcordanceSearchComponent } from './concordance-search/concordance-search.component';
import { CollocationSearchComponent } from './collocation-search/collocation-search.component';
import { DownloadComponent } from './download/download.component';
import { DatabaseComponent } from './database/database.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { CollocationsComponent } from './collocations/collocations.component';
import { ConcordancerComponent } from './concordancer/concordancer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConcordanceComponent,
    SyntaxComponent,
    SemanticsComponent,
    FileServicesComponent,
    ConcordanceSearchComponent,
    CollocationSearchComponent,
    DownloadComponent,
    DatabaseComponent,
    ConfigComponent,
    CollocationsComponent,
    ConcordancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
