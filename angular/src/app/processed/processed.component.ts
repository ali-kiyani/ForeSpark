import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { CitiesDto, InstallationsServiceProxy, ProcessedDto, ProcessedDtoPagedResultDto, ProcessedServiceProxy } from '@shared/service-proxies/service-proxies';
import { finalize } from 'rxjs/operators';

class PagedRProcessedRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-processed',
  templateUrl: './processed.component.html',
  styleUrls: ['./processed.component.css']
})
export class ProcessedComponent extends PagedListingComponentBase<ProcessedDto> implements OnInit {

  keyword = '';
  cities: CitiesDto[] = [];
  reports: ProcessedDto[] = [];
  selectedCity = 0;

  constructor(injector: Injector, private _processedService: ProcessedServiceProxy, 
    private __installationService: InstallationsServiceProxy) {
    super(injector);
   }

  ngOnInit(): void {
    this.__installationService.getAllCities().subscribe(result => {
      this.cities = result.items;
    });
  }

  viewOnMap(report: ProcessedDto) {

  }

  listCityChange() {
    this.refresh();
  }

  protected list(request: PagedRProcessedRequestDto, pageNumber: number, finishedCallback: Function): void {
    request.keyword = this.keyword;
    this._processedService
      .getAll(request.keyword, this.selectedCity, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: ProcessedDtoPagedResultDto) => {
        this.reports = result.items;
        this.showPaging(result, pageNumber);
      });
  }
  protected delete(entity: ProcessedDto): void {
    throw new Error('Method not implemented.');
  }
}
