# NativeScript FontScale

[![Build Status](https://travis-ci.org/darkmantle/nativescript-font-scale.svg?branch=master)](https://travis-ci.org/darkmantle/nativescript-font-scale)
[![npm version](https://badge.fury.io/js/nativescript-font-scale.svg)](https://badge.fury.io/js/nativescript-font-scale)

The purpose of this plugin is to automatically scale fonts based on a11y settings on the device, while keeping custom styling.

**Currently works on iOS 10+ only**

## Installation

```sh
tns plugin add nativescript-font-scale
```

## Usage 

#### Core
Once added onto your page, you can use the components using the same properties as the default NativeScript ones
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
                <ui:Label class="test" text="Testing2" />
                <ui:Button text="Test button" class="btn" />
            </StackLayout>
        </TabContentItem>
    </BottomNavigation>
</Page>
```

#### Angular
Once you register the element as below, you can then use it anywhere as you would a regular Label including all properties.

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
            <Button text="Test button" class="btn"></ScaledButton>
        </StackLayout>
    </TabContentItem>
</BottomNavigation>
```
**Note: You can use Label, Button and TabStripItem to override all existing ones, but as I've not fully tested everything, I would not recommend it.**
