// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { registerElement } from "nativescript-angular/element-registry"
import { AppModule } from "./app/app.module";

registerElement("Label", () => require("nativescript-font-scale").FontScale)

platformNativeScriptDynamic().bootstrapModule(AppModule);
