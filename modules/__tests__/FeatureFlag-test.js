import React from 'react';
import ReactDOM from 'react-dom';
import FeatureFlag from '../FeatureFlag';

import setupFlags from '../setupFlags';

setupFlags({
  raptors: true,
  waterAnimals: {
    octopus: true,
    shark: false
  }
});

describe('<FeatureFlag/>', () => {
  it('matches flag in config', () => {
    const node = document.createElement('div');

    ReactDOM.render(
      <FeatureFlag path="raptors">
        <div>raptors</div>
      </FeatureFlag>,
      node
    );

    expect(node.innerHTML).toContain('raptors');
  });

  it('matches nested flag in config', () => {
    const node = document.createElement('div');

    ReactDOM.render(
      <FeatureFlag path="waterAnimals.octopus">
        <div>octopus</div>
      </FeatureFlag>,
      node
    );

    expect(node.innerHTML).toContain('octopus');
  });

  it('enabling a flag renders children', () => {
    const node = document.createElement('div');

    window.enableFeature('waterAnimals.shark');

    ReactDOM.render(
      <FeatureFlag path="waterAnimals.shark">
        <div>shark</div>
      </FeatureFlag>,
      node
    );

    expect(node.innerHTML).toContain('shark');
  });
});
