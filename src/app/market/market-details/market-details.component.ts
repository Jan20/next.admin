import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Market } from '../market-model/market';
import { MarketService } from '../market-service/market.service';
import { AssetService } from '../../asset/asset-service/asset.service';

@Component({
  selector: 'app-market-details',
  templateUrl: './market-details.component.html',
  styleUrls: ['./market-details.component.scss']
})
export class MarketDetailsComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public market: Market = new Market('', '', '')

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService,
    public assetService: AssetService,
  
  ) {}

  public ngOnInit() {
  
    this.activatedRoute.params.subscribe(params => this.marketService.fetchMarket(params['marketId']))
    this.marketService.marketSubject.subscribe(market => {

      console.log('--------------------------------')
      console.log(market)
      this.market = market})
  
  }
  
  ///////////////
  // Functions //
  ///////////////
  public deleteMarket(): void {
    
    this.activatedRoute.params.subscribe(params => {
    
      this.marketService.deleteMarket(params['marketId'])
      this.router.navigate([`/markets`])
    
    })
  }

  public cleanMarketData(): void {

    this.activatedRoute.params.subscribe(params => {

      this.marketService.cleanMarketData(params['marketId'])
      this.router.navigate([`/markets/${params['marketId']}`])

    })

  }


}
