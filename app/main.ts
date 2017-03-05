import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {MainModule} from "./modules/MainModule";

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);