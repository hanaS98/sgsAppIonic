import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./pages/vision/vision.module').then( m => m.VisionPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
