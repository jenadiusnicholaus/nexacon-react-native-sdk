Quick Start Guide
================

Get up and running with the Nexacon React Native SDK in minutes.

Initialize the Client
--------------------

.. code-block:: typescript

    import { NexaconClient } from 'nexacon-react-native-sdk';

    const client = new NexaconClient({
      apiKey: 'your_api_key',
      secretKey: 'your_secret_key',
      baseUrl: 'https://nxservice.quantumvision-tech.com/api/v1.0'
    });

Available Services
------------------

Once the client is initialized, all services are available:

.. code-block:: typescript

    client.auth        // Authentication and token management
    client.messaging   // Send messages and manage contacts
    client.calls       // Audio/video calls
    client.devices     // Device registration for push notifications
    client.rooms       // Group chat rooms
    client.presence    // User presence and online status

Authentication
--------------

.. code-block:: typescript

    // Login user
    const token = await client.auth.login({
      username: 'user@example.com',
      password: 'password'
    });

    // Use the token for subsequent requests
    client.setToken(token.access_token);

Messaging
---------

.. code-block:: typescript

    // Send a message
    await client.messaging.send({
      to: '+255788811191',
      message: 'Hello!'
    });

    // Get message history
    const messages = await client.messaging.getHistory({
      recipient: '+255788811191',
      page: 1,
      pageSize: 50
    });

Calls
-----

.. code-block:: typescript

    // Initiate a video call
    const call = await client.calls.initiateCall({
      to: '+255788811191',
      callType: 'video',
      room: 'my-room'
    });

    // End a call
    await client.calls.endCall(call.callId);

Device Registration
-------------------

.. code-block:: typescript

    // Register device for push notifications
    await client.devices.register({
      fcmToken: 'device_fcm_token',
      platform: 'android'
    });

Next Steps
----------

Click on a service in the **API Reference** section for full documentation, method signatures, parameters, and code examples.
