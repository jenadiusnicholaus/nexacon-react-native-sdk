Installation
============

Requirements
------------

- React Native >= 0.70.0
- React >= 18.0.0
- Node.js >= 14.0.0
- npm, yarn, or pnpm

Install via npm
---------------

.. code-block:: bash

    npm install nexacon-react-native-sdk

Install via yarn
----------------

.. code-block:: bash

    yarn add nexacon-react-native-sdk

Install via pnpm
----------------

.. code-block:: bash

    pnpm add nexacon-react-native-sdk

Platform Support
----------------

The SDK works on:

- **iOS**: iOS 12.0 and higher
- **Android**: Android 5.0 (API 21) and higher

TypeScript Support
------------------

The SDK includes TypeScript type definitions:

.. code-block:: typescript

    import { NexaconClient } from 'nexacon-react-native-sdk';

    const client: NexaconClient = new NexaconClient({
      apiKey: 'your_api_key',
      secretKey: 'your_secret_key',
      baseUrl: 'https://nxservice.quantumvision-tech.com/api/v1.0'
    });
