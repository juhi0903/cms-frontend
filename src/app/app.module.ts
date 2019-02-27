
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
// import { LoginPageComponent } from "./pages/content-layout-page/login-page/login-page.component";


@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        // LoginPageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        NgbModule.forRoot(),
        HttpModule,
        HttpClientModule,
        // ReactiveFormsModule
    ],
    providers: [
        AuthService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }