import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import {SocialLoginModule,SocialAuthServiceConfig} from 'angularx-social-login'
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login'

import {FlexLayoutModule} from '@angular/flex-layout'

import {MatStepperModule} from '@angular/material/stepper'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatChipsModule} from '@angular/material/chips'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list'
import {MatRadioModule} from '@angular/material/radio'
import {MatSliderModule} from '@angular/material/slider'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select'

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginregisternavComponent } from './loginregisternav/loginregisternav.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginregisternavComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    FlexLayoutModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '482948980903-pm827hrv2qrdebiteulams2fm3ou4idv.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('665460847653638'),
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
