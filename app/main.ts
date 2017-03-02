import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {CatalogueModule} from "./modules/CatalogueModule";

const platform = platformBrowserDynamic();
platform.bootstrapModule(CatalogueModule);