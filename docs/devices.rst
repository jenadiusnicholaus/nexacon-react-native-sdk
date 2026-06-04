Devices
=======

.. js:class:: Devices

    Device registration service for push notifications.

Methods
-------

.. js:method:: Devices.register(device)

    Register a device for push notifications.

    :param device: Device information
    :type device: Object
    :param device.fcmToken: FCM token for the device
    :type device.fcmToken: string
    :param device.platform: Platform ('android', 'ios', or 'web')
    :type device.platform: string
    :param device.deviceName: Device name (optional)
    :type device.deviceName: string
    :returns: Registration response
    :rtype: Promise<Object>

.. js:method:: Devices.unregister(fcmToken)

    Unregister a device from push notifications.

    :param fcmToken: FCM token
    :type fcmToken: string
    :returns: Unregistration response
    :rtype: Promise<Object>

.. js:method:: Devices.listDevices()

    List all registered devices.

    :returns: List of devices
    :rtype: Promise<Object>

Example
-------

.. code-block:: typescript

    // Register a device
    await client.devices.register({
      fcmToken: 'device_fcm_token',
      platform: 'android',
      deviceName: 'My Device'
    });

    // List devices
    const devices = await client.devices.listDevices();
    console.log('Devices:', devices);

    // Unregister a device
    await client.devices.unregister('device_fcm_token');
