import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'budget-planner', loadChildren: () => import('../app/budget-planner/budget-planner.module').then(map => map.BudgetPlannerModule)
    }
];
