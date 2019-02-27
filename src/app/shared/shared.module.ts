import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective,
        
    ],
    imports:[
        RouterModule,
        CommonModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ToggleFullscreenDirective
        ]
})
export class SharedModule { }
