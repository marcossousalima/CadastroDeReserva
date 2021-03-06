import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/realizar-reserva/realizar-reserva.module').then(m => m.RealizarReservaPageModule)
  },
  {
    path: 'minhas-reservas',
    loadChildren: () => import('./pages/minhas-reservas/minhas-reservas.module').then(m => m.MinhasReservasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
