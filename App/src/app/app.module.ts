import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registre/register.component';
import { FormsModule } from '@angular/forms';
import { DocumenteditorComponent } from './documenteditor/documenteditor.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { JoinRoomComponent } from './join-romm/join-romm.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { RoomComponent } from './room/room.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HTTP_INTERCEPTORS ,HttpClientModule} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DocumenteditorComponent,
    CreateroomComponent,
    JoinRoomComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    RoomComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
