import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContentngComponent } from './components/contentng/contentng.component';
import { CallcontentngComponent } from './components/contentng/callcontentng/callcontentng.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { SortdataComponent } from './components/sortdata/sortdata.component';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { ParentComponent } from './componets/componentcommunication/parent/parent.component';
import { EmployeeDirectoryDynamicComponent } from './components/employee-directory-dynamic/employee-directory-dynamic.component';
import { Subjectdemo1Component } from './components/subjectdemo1/subjectdemo1.component';
import { SendMessageComponent } from './componets/messageapp/send-message/send-message.component';
import { QueryParamDestination1Component } from './components/query-param-destination1/query-param-destination1.component';
import { QueryParamComponent } from './components/query-param/query-param.component';
import { ProtectedComponentComponent } from './components/protected-component/protected-component.component';
import { AuthGuard } from './guards/auth.guard';
import { RouteResolverComponent } from './components/route-resolver/route-resolver.component';
import { ProductsResolvereService } from './services/resolver/products-resolvere.service';
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  {path:"observable",component:ObservablesComponent},
  {path:"databinding",component:DatabindingComponent},
  {path:"directive",component:DirectivesComponent},
  {path:"cart",component:ProductsComponent},
  {path:"jsonread",component:UsersComponent},
  {path:"content",component:CallcontentngComponent},
  {path:"sortdata",component:SortdataComponent},
  {path:"employeedirectory",component:EmployeeDirectoryComponent},
  {path:"pipe",component:PipesComponent},
  {path:"parent",component:ParentComponent},
  {path:"dynamicdirectory",component:EmployeeDirectoryDynamicComponent},
  {path:"subjectobservable",component:Subjectdemo1Component},
  {path:"messageapp",component:SendMessageComponent},
  {path:"queryparamsource",component:QueryParamComponent},
  {path:"queryparam/:id",component:QueryParamDestination1Component},
  {path:"protectedRoute",component:ProtectedComponentComponent,canActivate:[AuthGuard]},
  {path:"routeresolver",component:RouteResolverComponent,resolve:{products:ProductsResolvereService}},
  {path:"formcomponent",component:TemplateFormComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule) },
  // {path:,component:},
  // {path:,component:},
  // {path:,component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
