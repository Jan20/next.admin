import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MarketService } from "../../market/market-service/market.service";
import { AssetService } from "../asset-service/asset.service";

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title = 'Add Asset'
  private name: string
  private symbol: string

  //////////////////
  // FormControls //
  //////////////////
  public nameFormControl: FormControl = new FormControl()
  public symbolFormControl: FormControl = new FormControl()

  //////////////////
  // Constructors //
  //////////////////
  public constructor(
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService,
    public assetService: AssetService,
  ) {}

  ngOnInit() {
    this.nameFormControl.valueChanges.subscribe(name => this.name = name)
    this.symbolFormControl.valueChanges.subscribe(symbol => this.symbol = symbol)
  }

  ///////////////
  // Functions //
  ///////////////
  public addAsset(): void {
    this.activatedRoute.params.subscribe(params => {
      this.assetService.addAsset(params['marketId'], this.name, this.symbol)
      this.nameFormControl.reset()
      this.symbolFormControl.reset()
    })
  }

}
