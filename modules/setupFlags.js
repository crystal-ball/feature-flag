import set from 'lodash.set';
import config from './config';
import { getJSON, setJSON } from './localStorage';

export default function setupFlags(key, featureFlags) {
  if (typeof key === 'object') {
    featureFlags = key;
    key = config.storageKey;
  } else {
    config.storageKey = key;
  }

  if (!getJSON(key)) {
    setJSON(key, featureFlags);
  }

  window.enableFeature = function(path) {
    const features = getJSON(key);
    set(features, path, true);
    setJSON(key, features);
  };
}
