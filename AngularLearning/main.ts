import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./app/src/app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); 