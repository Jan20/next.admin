import { Component, OnInit } from '@angular/core'
import { Asset } from '../asset-model/asset'
import { ActivatedRoute, Router } from '@angular/router'
import { AssetService } from '../asset-service/asset.service'

@Component({

  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']

})
export class AssetDetailsComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public asset: Asset = new Asset('', '', '', '',)
  public quantity = 0
  public prediction = 0

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private router: Router,
    private activatedRoute: ActivatedRoute,
    private assetService: AssetService,
  
  ) {}

  ngOnInit() {

    this.initialize()
      
    
  }


  ///////////////
  // Functions //
  ///////////////
  private async initialize() {

    await this.activatedRoute.params.subscribe(params => this.assetService.fetchAsset(params['marketId'], params['assetId']))

    this.assetService.assetSubject.subscribe(asset => {
      
      if (asset !== null && asset !== undefined) {

        this.asset = asset
        this.prediction = asset.short_term_prediction


      }
    })

  }


  public showAssetOverview(): void {
  
    this.activatedRoute.params.subscribe( params => this.router.navigate([`/markets/${params['marketId']}`]))
  
  }
  
}


