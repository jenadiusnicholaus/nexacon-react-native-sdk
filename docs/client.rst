Client
======

.. js:class:: NexaconClient

    Main client class for interacting with the Nexacon API.

.. js:method:: NexaconClient(config)

    Initialize a new NexaconClient instance.

    :param config: Configuration object
    :type config: Object
    :param config.apiKey: API key for authentication
    :type config.apiKey: string
    :param config.secretKey: Secret key for authentication
    :type config.secretKey: string
    :param config.baseUrl: Base URL for API requests (default: https://nxservice.quantumvision-tech.com/api/v1.0)
    :type config.baseUrl: string
    :param config.timeout: Request timeout in milliseconds (default: 30000)
    :type config.timeout: number

.. js:method:: setToken(token)

    Set the authentication token for subsequent requests.

    :param token: Authentication token
    :type token: string

.. js:method:: getToken()

    Get the current authentication token.

    :returns: Current authentication token or null
    :rtype: string|null

Services
--------

The client provides access to the following services:

* :ref:`auth` - Authentication and token management
* :ref:`messaging` - Send and receive messages
* :ref:`calls` - Audio/video calling
* :ref:`devices` - Device registration
* :ref:`rooms` - Group chat rooms
* :ref:`presence` - User presence

Example
-------

.. code-block:: typescript

    import { NexaconClient } from 'nexacon-react-native-sdk';

    const client = new NexaconClient({
      apiKey: 'your_api_key',
      secretKey: 'your_secret_key'
    });

    // Authenticate
    const token = await client.auth.login({
      username: 'user@example.com',
      password: 'password'
    });

    client.setToken(token.access_token);

    // Use other services
    await client.messaging.send({
      to: '+255788811191',
      message: 'Hello!'
    });
