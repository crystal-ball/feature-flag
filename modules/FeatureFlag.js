import { Component } from 'react';
import { string } from 'prop-types';
import get from 'lodash.get';
import config from './config';
import { getJSON } from './localStorage';

class FeatureFlag extends Component {
  static propTypes = {
    path: string.isRequired
  };

  render() {
    const path = this.props.path;
    const features = getJSON(config.storageKey);
    return get(features, path) ? this.props.children : null;
  }
}

export default FeatureFlag;
