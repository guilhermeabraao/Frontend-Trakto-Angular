import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialArticle } from './pages/materialDidatico/article/article.component';
import { AllContent } from './pages/materialDidatico/allContent/allContent.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'main', component: MainComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'material', component: MaterialArticle },
{ path: 'material/todos', component: AllContent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
