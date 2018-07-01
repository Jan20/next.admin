import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Market } from '../market-model/market';
import { MarketService } from '../market-service/market.service';

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.scss']
})
export class MarketOverviewComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = 'In which market do you like to invest in?'
  public markets: Market[] = []

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private router: Router,
    public marketService: MarketService,

  ) {}

  ngOnInit() {

    this.marketService.fetchMarkets()
    this.marketService.marketsSubject.subscribe(markets => this.markets = markets)

  }

  ///////////////
  // Functions //
  ///////////////
  public switchView(market: Market): void {

    this.router.navigate([`markets/${market.market_id}`]);

  }
} 