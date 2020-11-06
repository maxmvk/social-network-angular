import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { FindPairComponent } from './pages/home/find-pair/find-pair.component';
import { TopMembersComponent } from './pages/home/top-members/top-members.component';
import { GroupsComponent } from './pages/home/groups/groups.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsletterComponent } from './pages/home/newsletter/newsletter.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { ExpansionPanelComponent } from './pages/how-it-works/explansion-panel/expansion-panel.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    IntroComponent,
    FindPairComponent,
    TopMembersComponent,
    GroupsComponent,
    TestimonialsComponent,
    NewsletterComponent,
    HowItWorksComponent,
    ExpansionPanelComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
