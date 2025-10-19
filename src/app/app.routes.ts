import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { TipoLente } from './tipo-lente/tipo-lente';
import { TipoEspessura } from './tipo-espessura/tipo-espessura';
import { AnexarReceita } from './anexar-receita/anexar-receita';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'produto-detalhe', component: ProdutoDetalhe },
    { path: 'tipo-lente', component: TipoLente },
    { path: 'tipo-espessura', component: TipoEspessura },
    { path: 'anexar-receita', component: AnexarReceita }
];
