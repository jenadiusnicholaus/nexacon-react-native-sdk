Presence
========

.. js:class:: Presence

    Presence service for checking user online status.

Methods
-------

.. js:method:: Presence.getStatus(userId)

    Get the presence status of a user.

    :param userId: User's phone number or JID
    :type userId: string
    :returns: Presence information
    :rtype: Promise<Object>

.. js:method:: Presence.getLastSeen(userId)

    Get the last seen timestamp of a user.

    :param userId: User's phone number or JID
    :type userId: string
    :returns: Last seen information
    :rtype: Promise<Object>

Example
-------

.. code-block:: typescript

    // Get user presence
    const presence = await client.presence.getStatus('+255788811191');
    console.log('Online:', presence.online);
    console.log('Status:', presence.status);

    // Get last seen
    const lastSeen = await client.presence.getLastSeen('+255788811191');
    console.log('Last seen:', lastSeen.timestamp);
