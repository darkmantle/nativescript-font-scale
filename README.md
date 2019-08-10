# NativeScript FontScale

[![npm](https://img.shields.io/npm/dt/nativescript-font-scale)](https://www.npmjs.com/package/nativescript-font-scale) ![GitHub](https://img.shields.io/github/license/darkmantle/nativescript-font-scale) [![npm](https://img.shields.io/npm/v/nativescript-font-scale)](https://www.npmjs.com/package/nativescript-font-scale) ![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/darkmantle/nativescript-font-scale)

The purpose of this plugin is to automatically scale fonts based on a11y settings on the iOS device, while keeping custom styling.

**Currently works on iOS 10+ only, and applies to labels, buttons and tabs only. Android does this automatically.**

**Tab support currently works, however it requires a restart of the application, unlike other components. This will be fixed.**

## Installation

```sh
tns plugin add nativescript-font-scale
```

## Usage 

### Core
Once added onto your page, you can use the components using the same properties as the default NativeScript ones. To disable the scaling you can add the "scale" property with "false" as the value. All components will scale by default.

```xml
<Page class="page"
    navigatingTo="onNavigatingTo" 
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:ui="nativescript-font-scale">

    <BottomNavigation>
        <TabStrip>
            <ui:TabStripItem title="Home" iconSource="res://baseline_home_black_18pt"></ui:TabStripItem>
        </TabStrip>
        <TabContentItem>
            <StackLayout>
                <ui:Label scale="false" class="test" text="Testing2" />
                <ui:Button text="Test button" class="btn" />
            </StackLayout>
        </TabContentItem>
    </BottomNavigation>
</Page>
```

### Angular
Once registered in your Angular application, you can use the components using the same properties as the default NativeScript ones. To disable the scaling you can add the "scale" property with "false" as the value. All components will scale by default.

```ts
registerElement("ScaledLabel", () => require("nativescript-font-scale").Label);
registerElement("ScaledButton", () => require("nativescript-font-scale").Button);
registerElement("ScaledTabStripItem", () => require("nativescript-font-scale").TabStripItem);
```

```html
<BottomNavigation>
    <TabStrip>
        <ScaledTabStripItem title="Home" iconSource="res://baseline_home_black_18pt"></ScaledTabStripItem>
    </TabStrip>
    <TabContentItem>
        <StackLayout>
            <Label class="test" text="Testing2"></ScaledLabel>
            <Button scale="false" text="Test button" class="btn"></ScaledButton>
        </StackLayout>
    </TabContentItem>
</BottomNavigation>
```

**Note: You can use Label, Button and TabStripItem to override all existing ones, but as I've not fully tested everything, I would not recommend it.**


## Todo
- [ ] FormattedString
- [ ] ActionBar
- [ ] TextField
- [ ] TextView
- [ ] DatePicker
- [ ] TimePicker
- [ ] Dialog
- [ ] ListPicker
- [ ] SegmentedBar
- [ ] SearchBar
