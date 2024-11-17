import { Routes } from '@angular/router';
import { LlamadaTelefonicaComponent } from './llamada-telefonica/llamada-telefonica.component';
import { CapicuaComponent } from './capicua/capicua.component';
import { LlanteriaComponent } from './llanteria/llanteria.component';
import { DescomponerComponent } from './descomponer/descomponer.component';

export const routes: Routes = [
    { path: 'Llamadas', component: LlamadaTelefonicaComponent },
    { path: '', redirectTo: 'Llamadas', pathMatch: 'full' },
    { path: 'capicua', component: CapicuaComponent},
    { path: 'llanteria', component: LlanteriaComponent},
    { path: 'descomponer', component: DescomponerComponent},
];
