import { Component, Injector, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { HomeDto, HomeServiceProxy, InstallationsHomeDto, RequestsHomeDto, RequestsInsightHome } from '@shared/service-proxies/service-proxies';

@Component({
  templateUrl: './home.component.html',
  animations: [appModuleAnimation()],
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends AppComponentBase implements OnInit {

  homeDto = new HomeDto();
  lat = 30.0497935;
  lng = 60.3349021;
  loaded = false;

  constructor(injector: Injector, private _homeService: HomeServiceProxy) {
    super(injector);
    this.homeDto.requestsHome = new RequestsHomeDto();
    this.homeDto.installationsHome = new InstallationsHomeDto();
    this.homeDto.insightHome = [];
  }

  ngOnInit() {
    this._homeService.getHomeMetaData().subscribe(result => {
      this.homeDto = result;
      this.homeDto.insightHome.forEach(x => {
        x.requestsCount *= 8000;
      });
      this.loaded = true;
      debugger;
    });
  }
}
