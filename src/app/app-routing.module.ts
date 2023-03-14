import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ConcordanceComponent } from './concordance/concordance.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { SemanticsComponent } from './semantics/semantics.component';
import { FileServicesComponent } from './file-services/file-services.component';
import { CollocationSearchComponent } from './collocation-search/collocation-search.component';
import { ConcordanceSearchComponent } from './concordance-search/concordance-search.component';
import { DatabaseComponent } from './database/database.component';
import { DownloadComponent } from './download/download.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'concordance', component: ConcordanceComponent},
  {path: 'syntax', component: SyntaxComponent},
  {path: 'semantics', component: SemanticsComponent},
  {path: 'file_services', component: FileServicesComponent},
  {path: 'concordance_search', component: ConcordanceSearchComponent},
  {path: 'collocation_search', component: CollocationSearchComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'config', component: ConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
