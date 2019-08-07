# NativeScript FontScale

[![Build Status](https://img.shields.io/travis/darkmantle/nativescript-font-scale/master?style=for-the-badge)](https://travis-ci.org/darkmantle/nativescript-font-scale)
[![npm](https://img.shields.io/npm/v/nativescript-font-scale?style=for-the-badge)](https://google.com)

The purpose of this plugin is to automatically scale fonts based on a11y settings on the device, while keeping custom styling.

**Currently works on iOS only**

## Installation

```sh
tns plugin add nativescript-font-scale
```

## Usage 

#### Core
Once added onto your page, you can use it as you would a regular Label including all properties.
```xml
<Page class="page"
    navigatingTo="onNavigatingTo" 
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:ui="nativescript-font-scale">
    <StackLayout>
        <ui:FontScale class="test" text="Testing" />
    </StackLayout>
</Page>
```

#### Angular
Once you register the element as below, you can then use it anywhere as you would a regular Label including all properties.

```ts
registerElement("ScaledLabel", () => require("nativescript-font-scale").FontScale);
```

```html
<StackLayout>
	<ScaledLabel text="Testing">
</StackLayout>
```
