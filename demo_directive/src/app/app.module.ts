import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MeanComponent } from './about/mean/mean.component';
import { MernComponent } from './about/mern/mern.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { SquarePipe } from './square.pipe';
import { LimitPipe } from './limit.pipe';
import { StrDirective } from './str.directive';
import { AttrDirective } from './attr.directive';

const routes:Routes=[
  { path:'', component:HomeComponent},
  { path:'about', component:AboutComponent,
  children:[
    { path:'', redirectTo:'mean', pathMatch:'full'},
    { path:'test', component:TestComponent},
    { path:'demo', component:DemoComponent},
    { path:'mean', component:MeanComponent},
    { path:'mern', component:MernComponent}
  ]},
  { path:'blog', component:BlogComponent},
  { path:'contact', component:ContactComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    MeanComponent,
    MernComponent,
    SquarePipe,
    LimitPipe,
    StrDirective,
    AttrDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
