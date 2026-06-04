Nexacon React Native SDK Documentation
======================================

Welcome to the official documentation for the Nexacon React Native SDK. This SDK provides a comprehensive solution for integrating the Nexacon API into React Native applications.

.. toctree::
   :maxdepth: 2
   :caption: Getting Started:

   installation
   quickstart

.. toctree::
   :maxdepth: 2
   :caption: API Reference:

   client
   auth
   messaging
   calls
   devices
   rooms
   presence

Overview
--------

The Nexacon React Native SDK enables developers to integrate authentication, messaging, calling, and device management into their React Native applications through a simple, type-safe interface.

Features
--------

* **Authentication**: User login, token management
* **Messaging**: Send/receive messages, manage contacts
* **Calls**: Initiate audio/video calls, group calls
* **Devices**: Register devices for push notifications
* **TypeScript**: Full TypeScript support with type definitions
* **React Native**: Optimized for React Native platform

Installation
------------

.. code-block:: bash

    npm install nexacon-react-native-sdk
    # or
    yarn add nexacon-react-native-sdk
    # or
    pnpm add nexacon-react-native-sdk

Quick Start
-----------

.. code-block:: typescript

    import { NexaconClient } from 'nexacon-react-native-sdk';

    // Initialize client
    const client = new NexaconClient({
      apiKey: 'your_api_key',
      secretKey: 'your_secret_key',
      baseUrl: 'https://nxservice.quantumvision-tech.com/api/v1.0'
    });

    // Authenticate user
    const token = await client.auth.login({
      username: 'user@example.com',
      password: 'password'
    });

    // Send message
    await client.messaging.send({
      to: '+255788811191',
      message: 'Hello!'
    });

    // Initiate call
    const call = await client.calls.initiateCall({
      to: '+255788811191',
      callType: 'video',
      room: 'my-room'
    });

    // Register device for push notifications
    await client.devices.register({
      fcmToken: 'device_fcm_token',
      platform: 'android'
    });
