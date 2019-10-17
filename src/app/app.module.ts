import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AuthenticationService } from "./_services/authentication.service";
import { UserService } from "./_services/user.service";
import { AdminComponent } from "./admin/admin.component";
import { AssistanceComponent } from "./assistance/assistance.component";
import { HomeComponent } from "./home/home.component";
import { IncidentComponent } from "./incident/incident.component";
import { LoginComponent } from "./login/login.component";
import { PenTestComponent } from "./pen-test/pen-test.component";
import { QuickCheckComponent } from "./quick-check/quick-check.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AdminComponent,
    AssistanceComponent,
    HomeComponent,
    IncidentComponent,
    LoginComponent,
    PenTestComponent,
    QuickCheckComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    /*AuthenticationService, UserService*/ {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class AppModule {}
