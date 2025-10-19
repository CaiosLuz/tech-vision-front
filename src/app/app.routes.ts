import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { TipoLente } from './tipo-lente/tipo-lente';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'produto-detalhe', component: ProdutoDetalhe },
    { path: 'tipo-lente', component: TipoLente }
];
