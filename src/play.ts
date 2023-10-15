import { Page } from "puppeteer";
import { sleep} from "./utils";

export default class PlayGame {
  page: Page;
  width: number;
  height: number;
  centerX: number;
  centerY: number;

  firstFleetShipX: number;
  firstFleetShipY: number;

  manageFleetX: number;
  manageFleetY: number;

  SectorScanX: number;
  SectorScanY: number;

  scanButtonX: number;
  scanButtonY: number;

  allScanButtonX: number;
  allScanButtonY: number;

  constructor(page: Page, width: number, height: number) {
    this.page = page;
    this.width = width;
    this.height = height;

    // Calculate the center coordinates
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;

    this.firstFleetShipX = this.centerX + 550;
    this.firstFleetShipY = this.centerY +  290;

    this.manageFleetX = this.centerX + 550;
    this.manageFleetY = this.centerY + 300;

    this.SectorScanX = this.centerX + 400;
    this.SectorScanY = this.centerY - 5;

    this.scanButtonX = this.centerX - 330;
    this.scanButtonY = this.centerY + 210;

    this.allScanButtonX = this.centerX + 560;
    this.allScanButtonY = this.centerY +  340;
  }

  async startPlaying(){
    await installMouseHelper(this.page);
    await this.page.mouse.wheel({deltaY: 225})
    await sleep(1000);
    await this.page.mouse.click(this.firstFleetShipX -50, this.firstFleetShipY);
    //console.log(this.firstFleetShipX -50, this.firstFleetShipY);
    await sleep(1000);
      for( let i = 0; i < 40000; i++){
        console.log("Scan ", i);
        await this.scan(this.page, this.allScanButtonX, this.allScanButtonY);
    }
  }

  private async scan(page: Page, X, Y) {
    //console.log(X, Y);
    await page.mouse.click(X, Y);
    await sleep(70000);
  }
}
