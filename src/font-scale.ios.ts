import { Font, FontWeight } from "tns-core-modules/ui/styling/font";

import { ButtonCommon, LabelCommon, TabStripItemCommon } from "./font-scale.common";
import { fontFamilyProperty } from "tns-core-modules/ui/page/page";

export class Label extends LabelCommon {
    constructor() {
        super();

        this.on("loaded", () => {
            const ios: UILabel = this.ios;

            if (!this.style.fontFamily || this.style.fontSize || this.style.fontWeight) {
                return;
            }

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
            const ios: UILabel = btn.titleLabel;

            if (!this.style.fontFamily || this.style.fontSize || this.style.fontWeight) {
                return;
            }

            const newFont = new Font(this.style.fontFamily, this.style.fontSize, null, this.style.fontWeight);
            ios.font = UIFontMetrics.defaultMetrics.scaledFontForFont(newFont.getUIFont(null));

            ios.adjustsFontForContentSizeCategory = true;
        });
    }

}

export class TabStripItem extends TabStripItemCommon {
    constructor() {
        super();

        this.on("loaded", () => {
            const item: UITabBarItem = this.nativeView;

            const test: NSDictionary<String, any> = item.titleTextAttributesForState(UIControlState.Normal);
            const font: UIFont = test.valueForKey("NSFont");

            const attrs: NSDictionary<any, any> = NSMutableDictionary.new();
            const newFont = new Font(font.familyName, font.pointSize, null, FontWeight.NORMAL);

            const scaledFont = UIFontMetrics.defaultMetrics.scaledFontForFont(newFont.getUIFont(null));
            attrs.setValueForKey(scaledFont, NSFontAttributeName);
            item.setTitleTextAttributesForState(attrs, UIControlState.Normal);
        });
    }
}