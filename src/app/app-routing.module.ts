import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./modules/post/pages/posts/post-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
