import { Font, FontWeight } from "tns-core-modules/ui/styling/font";

import { ButtonCommon, LabelCommon, TabStripItemCommon } from "./font-scale.common";
import { fontFamilyProperty } from "tns-core-modules/ui/page/page";

export class Label extends LabelCommon {
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

export class Button extends ButtonCommon {
    constructor() {
        super();

        this.on("loaded", () => {
            const btn: UIButton = this.ios;
            const ios: UILabel = btn.titleLabel

            const newFont = new Font(this.style.fontFamily, this.style.fontSize, null, this.style.fontWeight);
            ios.font = UIFontMetrics.defaultMetrics.scaledFontForFont(newFont.getUIFont(null));

            ios.adjustsFontForContentSizeCategory = true;
        })
    }

}

export class TabStripItem extends TabStripItemCommon {
    constructor() {
        super();

        this.on("loaded", () => {
            const item: UITabBarItem = this.nativeView;

            let attrs: NSDictionary<any, any> = NSMutableDictionary.new();
            const newFont = new Font("SF UI Text Medium", 17, null, FontWeight.NORMAL);
            attrs.setValueForKey(newFont.getUIFont(null), NSFontAttributeName);

            item.setTitleTextAttributesForState(attrs, UIControlState.Normal);
        });
    }
}