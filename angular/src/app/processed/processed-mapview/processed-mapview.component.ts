import { ViewportScroller } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/app-component-base';
import { ProcessedMetadata, ProcessedServiceProxy } from '@shared/service-proxies/service-proxies';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-processed-mapview',
  templateUrl: './processed-mapview.component.html',
  styleUrls: ['./processed-mapview.component.css'],
  animations: [appModuleAnimation()]
})
export class ProcessedMapviewComponent extends AppComponentBase implements OnInit {

  lat = 30.0497935;
  lng = 60.3349021;
  requestId: number;
  metadata: ProcessedMetadata;
  previous;

  constructor(injector: Injector, private _processedService: ProcessedServiceProxy,
    private route: ActivatedRoute, private viewportScroller: ViewportScroller, private _lightbox: Lightbox) {
    super(injector);
    this.route.params.subscribe(param => {
      this.requestId = param.id;
    });
   }

  ngOnInit(): void {
    this._processedService.getProcessedMetadata(this.requestId).subscribe(metadata => {
      this.metadata = metadata;
      this.lat = metadata.request.lat;
      this.lng = metadata.request.lng;
    });
  }

  getIcon() {
    return '../../assets/img/bullseye.svg';
  }

  getDetailIcon() {
    return '../../assets/img/black-pin.svg';
  }

  openImage(fileName: string) {
    const imgList = [];
    const album = {
      src: this.processedImageUrl + this.metadata.request.id + '/' + fileName
    };
    imgList.push(album);
    this._lightbox.open(imgList);
  }

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }
}
