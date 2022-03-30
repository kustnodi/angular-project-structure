import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SlottrakUiModule } from './slottrak-ui.module';

@Injectable({
  providedIn: SlottrakUiModule
})
export class DetailRouteProviderService {
  private readonly router: Router;

  constructor(router: Router) {
    this.router = router
  }

  getDetailRouteService(config: DetailRouteServiceConfig): DetailRouteService {
    return new DetailRouteService(config)
  }
}

class DetailRouteService {
  constructor(config: DetailRouteServiceConfig) {
  }

  add(detailRoute: DetailRoute) {

  }
}

interface DetailRouteServiceConfig {
  baseRoute: Route
}

interface DetailRoute {
  name: string
}
