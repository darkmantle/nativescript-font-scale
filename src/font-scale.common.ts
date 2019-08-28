import { Label } from "tns-core-modules/ui/label";
import { Button } from "tns-core-modules/ui/button";
import { TabStripItem } from "tns-core-modules/ui/tab-navigation-base/tab-strip-item";
import { Property, booleanConverter } from "tns-core-modules/ui/core/view";

export class LabelCommon extends Label {
    public scale: boolean;
    constructor() {
        super();
    }
}

const scaleProps = {
    name: "scale",
    defaultValue: true,
    valueConverter: booleanConverter,
    affectsLayout: true
};

export const buttonScaleProperty = new Property<ButtonCommon, boolean>(scaleProps);
export const labelScaleProperty = new Property<LabelCommon, boolean>(scaleProps);
export const tabStripScaleProperty = new Property<TabStripItemCommon, boolean>(scaleProps);

export class ButtonCommon extends Button {
    public scale: boolean;
    constructor() {
        super();
    }
}

export class TabStripItemCommon extends TabStripItem {
    public scale: boolean;
    constructor() {
        super();
    }
}