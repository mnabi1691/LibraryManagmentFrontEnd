import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { LoginComponent } from './login/login.component';
import { TokenAuthGuard } from './auth/token-auth.guard';
import { SuperadminGuard } from './auth/superadmin.guard';
import { LogoutComponent } from './logout/logout.component';
import { TokenNullGuard } from './auth/token-null.guard';
import { BookdetailGuard } from './auth/bookdetail.guard';
import { LibraryuserdetailGuard } from './auth/libraryuserdetail.guard';
import { BookrequestDetailComponent } from './bookrequest-details/bookrequest-detail/bookrequest-detail.component'
import { BookrequestDetailsComponent } from './bookrequest-details/bookrequest-details.component';
import { AdministratorDetailsComponent } from './administrator-details/administrator-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LibraryuserDetailsComponent } from './libraryuser-details/libraryuser-details.component'
import { LibraryuserDetailComponent } from './libraryuser-details/libraryuser-detail/libraryuser-detail.component'
import { LibraryUserRequestDetailsComponent } from './library-user-request-details/library-user-request-details.component';
import { LibraryUserRequestDetailComponent } from './library-user-request-details/library-user-request-detail/library-user-request-detail.component'
import { LibraryUserRequestGuard } from './auth/libraryuserrequest.guard';
import { from } from 'rxjs';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "author-details", component: AuthorDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "login", component: LoginComponent, canActivate:[TokenNullGuard]},
  {path: "publisher-details", component: PublisherDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "logout", component: LogoutComponent, canActivate:[TokenAuthGuard]},
  {path: "bookrequest-details", component: BookrequestDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "administrator-details", component: AdministratorDetailsComponent, canActivate:[SuperadminGuard]},
  {path: "bookrequest-detail", component: BookrequestDetailComponent, canActivate:[BookdetailGuard]},
  {path: "library-user-request-details", component: LibraryUserRequestDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "library-user-request-detail", component: LibraryUserRequestDetailComponent, canActivate:[LibraryUserRequestGuard]},
  {path: "book-details", component: BookDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "libraryuser-details", component: LibraryuserDetailsComponent, canActivate:[SuperadminGuard]},
  {path: "libraryuser-detail", component: LibraryuserDetailComponent, canActivate:[LibraryuserdetailGuard]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
