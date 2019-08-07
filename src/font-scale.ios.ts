import { Common } from "./font-scale.common";
import { Font } from "tns-core-modules/ui/styling/font";

export class FontScale extends Common {
    constructor() {
        super();

        this.on("loaded", () => {
            const ios: UILabel = this.ios;

            const newFont = new Font(this.style.fontFamily, this.style.fontSize, null, this.style.fontWeight);
            ios.font = UIFontMetrics.defaultMetrics.scaledFontForFont(newFont.getUIFont(null));

            ios.adjustsFontForContentSizeCategory = true;

        });
    }
}
