import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorDetailComponent } from './author-details/author-detail/author-detail.component';
import { AuthorDetailListComponent } from './author-details/author-detail-list/author-detail-list.component';
import {AuthorDetailService} from './shared/author-detail.service';
import { FooterComponent } from './footer/footer.component';
import { PublisherDetailComponent } from './publisher-details/publisher-detail/publisher-detail.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { PublisherDetailListComponent } from './publisher-details/publisher-detail-list/publisher-detail-list.component';
import { PublisherDetailService } from './shared/publisher-detail.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/login.service';
import { LibraryuserDetailService } from './shared/libraryuser-detail.service';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministratorDetailsComponent } from './administrator-details/administrator-details.component';
import { BookrequestDetailsComponent } from './bookrequest-details/bookrequest-details.component';
import { AdministratorDetailService } from './shared/administrator-detail.service';
import { BookrequestDetailService } from './shared/bookrequest-detail.service';
import { BookDetailService } from './shared/book-detail.service'
import { AdministratorDetailComponent } from './administrator-details/administrator-detail/administrator-detail.component';
import { AdministratorDetailListComponent } from './administrator-details/administrator-detail-list/administrator-detail-list.component';
import { BookrequestDetailComponent } from './bookrequest-details/bookrequest-detail/bookrequest-detail.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDetailComponent } from './book-details/book-detail/book-detail.component';
import { BookDetailListComponent } from './book-details/book-detail-list/book-detail-list.component';
import { LibraryuserDetailsComponent } from './libraryuser-details/libraryuser-details.component';
import { LibraryuserDetailComponent } from './libraryuser-details/libraryuser-detail/libraryuser-detail.component';
import { LibraryUserRequestDetailsComponent } from './library-user-request-details/library-user-request-details.component';
import { LibraryUserRequestDetailComponent } from './library-user-request-details/library-user-request-detail/library-user-request-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AuthorDetailsComponent,
    AuthorDetailComponent,
    AuthorDetailListComponent,
    FooterComponent,
    PublisherDetailComponent,
    PublisherDetailsComponent,
    PublisherDetailListComponent,
    LoginComponent,
    LogoutComponent,
    AdministratorDetailsComponent,
    BookrequestDetailsComponent,
    AdministratorDetailComponent,
    AdministratorDetailListComponent,
    BookrequestDetailComponent,
    BookDetailsComponent,
    BookDetailComponent,
    BookDetailListComponent,
    LibraryuserDetailsComponent,
    LibraryuserDetailComponent,
    LibraryUserRequestDetailsComponent,
    LibraryUserRequestDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [AuthorDetailService, PublisherDetailService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  AdministratorDetailService,
  LibraryuserDetailService,
  BookrequestDetailService,
  BookDetailService,
   LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
