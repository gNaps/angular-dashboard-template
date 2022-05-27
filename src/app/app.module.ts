import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './@ui/footer/footer.component';
import { LayoutComponent } from './@ui/layout/layout.component';
import { SidebarComponent } from './@ui/sidebar/sidebar.component';
import { TopbarComponent } from './@ui/topbar/topbar.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
