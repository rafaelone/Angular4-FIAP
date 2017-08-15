import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {PizzariaComponent} from './pizzaria/pizzaria.component'
import {ProdutosComponent} from './produtos/produtos.component'
import {SobreComponent} from './sobre/sobre.component'

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'pizzaria', component: PizzariaComponent},
	{path: 'produtos', component: ProdutosComponent},
	{path: 'sobre', component: SobreComponent}
]
