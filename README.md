# feature-flag 
[feature-flag](https://github.com/crystal-ball/feature-flag) is a feature flag component for React.

A `<FeatureFlag>` component will render any child components if the passed `path`
property is enabled in a feature flags object passed to the `setupFlags` function.
The feature flags object could be stored in object in separate javascript file, 
a json file, or returned from an api request.

## Installation

```bash
$ npm install --save @crystal-ball/feature-flag
$ yarn add @crystal-ball/feature-flag
```

## Usage

Render a `<FeatureFlag>` component with a `path` property. The passed `path`
should match a property in the feature flags object passed to `setupFlags`
before the app starts up. If the path exists and it's truthy, the component's
children will render.

`setupFlags` takes an optional first argument to change the name of the key
used to store the feature flags as json in localStorage. By default, the key is
`crystal-ball/feature-flags`.

```javascript
import React, { Component } from 'react';
import { setupFlags, FeatureFlag } from '@crystal-ball/feature-flag';

setupFlags({
  someFeature: true
});

class App extends Component {
  render() {
    return (
      <div>
        <FeatureFlag path="someFeature">
          <div>Your cool feature</div>
        </FeatureFlag>
      </div>
    );
  }
}
```

In the developer console you can enable any of the features you've defined by
executing `window.enableFeature('someFeature')` and refresh the page. Since
all of the flags are stored in localStorage, clear your cache or your
localStorage to reset the app back to the original feature flag configuration
passed to `setupFlags`.

