import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer/customer-list-component/customer-list-component.component';
import { AppComponent } from './app.component';
import { CustomerFormAddNewComponent } from './components/customer/customer-form-add-new/customer-form-add-new.component';

export const routes: Routes = [

    // { path: 'customers', component: CustomerListComponent }, // Route pour afficher la liste des clients
    // { path: '', redirectTo: '/customers', pathMatch: 'full' }, // Redirection par défaut
    // { path: '**', redirectTo: '/customers' }, // Gestion des routes non trouvées
    { 
        path: '',
        component: CustomerListComponent
    },
    { path: 'customersList', 
        component: CustomerListComponent 
    },
    { path: 'customerFormAddNew', 
        component: CustomerFormAddNewComponent 
    },

];
