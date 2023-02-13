import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CenterComponent } from './components/center/center.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';
import { ContentngComponent } from './components/contentng/contentng.component';
import { CallcontentngComponent } from './components/contentng/callcontentng/callcontentng.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortdataComponent } from './components/sortdata/sortdata.component';
import { NumberOnlyDirective } from './customDirective/number-only.directive';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { SearchpipePipe } from './custom-pipes/searchpipe.pipe';
import { ParentComponent } from './componets/componentcommunication/parent/parent.component';
import { Child1Component } from './componets/componentcommunication/child1/child1.component';
import { Child2Component } from './componets/componentcommunication/child2/child2.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { EmployeeDirectoryDynamicComponent } from './components/employee-directory-dynamic/employee-directory-dynamic.component';
import { HttpClient,HttpHandler,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor1 } from './interceptors/my-interceptor1';
import { RetryInterceptor } from './interceptors/retry-interceptor';
import { ObservablesComponent } from './components/observables/observables.component';
import { Subjectdemo1Component } from './components/subjectdemo1/subjectdemo1.component';
import { SendMessageComponent } from './componets/messageapp/send-message/send-message.component';
import { ReceiveMessageComponent } from './componets/messageapp/receive-message/receive-message.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { FormDemo2Component } from './components/form-demo2/form-demo2.component';
import { Formdemo3Component } from './components/formdemo3/formdemo3.component';
import { QueryParamComponent } from './components/query-param/query-param.component';
import { QueryParamDestination1Component } from './components/query-param-destination1/query-param-destination1.component';
import { ProtectedComponentComponent } from './components/protected-component/protected-component.component';
import { RouteResolverComponent } from './components/route-resolver/route-resolver.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CenterComponent,
    CarouselComponent,
    ElectronicsComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    UsersComponent,
    ContentngComponent,
    CallcontentngComponent,
    SortdataComponent,
    NumberOnlyDirective,
    EmployeeDirectoryComponent,
    PipesComponent,
    EmployeeCRUDComponent,
    OrdinalPipe,
    SearchpipePipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    LifecycleHooksComponent,
    ServiceDemoComponent,
    EmployeeDirectoryDynamicComponent,
    ObservablesComponent,
    Subjectdemo1Component,
    SendMessageComponent,
    ReceiveMessageComponent,
    FormDemo1Component,
    FormDemo2Component,
    Formdemo3Component,
    QueryParamComponent,
    QueryParamDestination1Component,
    ProtectedComponentComponent,
    RouteResolverComponent,
    TemplateFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:"card",component:ProductsComponent}
      ]
    ),
  Ng2SearchPipeModule,
  NgxPaginationModule,
  HttpClientModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyInterceptor1,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:RetryInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
