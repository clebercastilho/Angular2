import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppForm} from "./components/app-form";
import {AppComponent} from "./components/app-component";
import {AppWhatever} from './components/app-whatever';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/whatever',
        pathMatch: 'full'
    },
    {
        path: 'whatever',
        component: AppWhatever
    },
    {
        path: 'aluno',
        component: AppForm
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }