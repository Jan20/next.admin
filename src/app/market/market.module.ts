import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetModule } from '../asset/asset.module';
import { MaterialModule } from '../config/material.module';
import { SharedModule } from '../shared/shared.module';
import { MarketAddComponent } from './market-add/market-add.component';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { MarketOverviewComponent } from './market-overview/market-overview.component';
import { MarketService } from './market-service/market.service';
import { MarketStatsComponent } from './market-stats/market-stats.component';
import { MarketUpdateComponent } from './market-update/market-update.component';

@NgModule({
  imports: [

    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AssetModule,

  ], declarations: [
    
    MarketOverviewComponent, 
    MarketDetailsComponent,
    MarketAddComponent,
    MarketStatsComponent,
    MarketUpdateComponent,
  
  ], providers: [
  
    MarketService
  
  ], exports : [


  ]
})
export class MarketModule { }
