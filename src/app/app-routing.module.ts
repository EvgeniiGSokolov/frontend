import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ConcordanceComponent } from './concordance/concordance.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { SemanticsComponent } from './semantics/semantics.component';
import { FileServicesComponent } from './file-services/file-services.component';
import { DatabaseComponent } from './database/database.component';
import { DownloadComponent } from './download/download.component';
import { ConfigComponent } from './config/config.component';
import { CollocationsComponent } from './collocations/collocations.component';
import { ConcordancerComponent } from './concordancer/concordancer.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'menu', component: MenuComponent},
  {path: 'concordance', component: ConcordanceComponent},
  {path: 'syntax', component: SyntaxComponent},
  {path: 'semantics', component: SemanticsComponent},
  {path: 'file_services', component: FileServicesComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'collocations', component: CollocationsComponent},
  {path: 'concordancer', component: ConcordancerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
