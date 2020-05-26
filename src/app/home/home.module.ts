import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from "./components";

@NgModule({
    declarations: [ HomeHeaderComponent ],
    imports: [HomeRoutingModule]
})
export class HomeModule {}
