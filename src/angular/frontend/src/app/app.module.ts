import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MaterialModule } from './material.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { PresentationComponent } from './components/presentation/presentation.component';
import { DashboardComponent } from './components/dashboard/dahsboard.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoSessionComponent } from './components/video-session/video-session.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { JoinSessionDialogComponent } from './components/dashboard/join-session-dialog.component';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { LessonService } from './services/lesson.service';
import { VideoSessionService } from './services/video-session.service';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    DashboardComponent,
    LessonDetailsComponent,
    ProfileComponent,
    VideoSessionComponent,
    ErrorMessageComponent,
    JoinSessionDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    routing,
  ],
  providers: [
    AuthenticationService,
    UserService,
    LessonService,
    VideoSessionService,
    AuthGuard,
  ],
  entryComponents: [
    JoinSessionDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
