import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {PostListComponent} from "./modules/post/pages/posts/post-list.component";
import {PostManagementComponent} from "./modules/post/pages/management/post-management.component";
import {PostService} from "./modules/post/services/post.service";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component:PostListComponent},
  {path: 'management', component: PostManagementComponent}
]
@NgModule ({
  declarations: [
    PostManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [PostService]

})

export class PostModule {}
