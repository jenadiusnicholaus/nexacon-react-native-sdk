Rooms
=====

.. js:class:: Rooms

    Room management service for group chat rooms.

Methods
-------

.. js:method:: Rooms.create(params)

    Create a new group chat room.

    :param params: Room parameters
    :type params: Object
    :param params.name: Room name
    :type params.name: string
    :param params.description: Room description (optional)
    :type params.description: string
    :param params.members: Array of member phone numbers
    :type params.members: string[]
    :returns: Room information
    :rtype: Promise<Object>

.. js:method:: Rooms.list(params)

    List available rooms.

    :param params: Query parameters (optional)
    :type params: Object
    :param params.page: Page number (default: 1)
    :type params.page: number
    :param params.pageSize: Number of rooms per page (default: 50)
    :type params.pageSize: number
    :returns: List of rooms
    :rtype: Promise<Object>

.. js:method:: Rooms.getMessages(roomId, params)

    Get messages from a room.

    :param roomId: Room ID
    :type roomId: string
    :param params: Query parameters
    :type params: Object
    :param params.page: Page number (default: 1)
    :type params.page: number
    :param params.pageSize: Number of messages per page (default: 50)
    :type params.pageSize: number
    :returns: Room messages
    :rtype: Promise<Object>

Example
-------

.. code-block:: typescript

    // Create a room
    const room = await client.rooms.create({
      name: 'Project Team',
      description: 'Team chat for project updates',
      members: ['+255788811191', '+255788811192']
    });

    console.log('Room ID:', room.roomId);

    // List rooms
    const rooms = await client.rooms.list({
      page: 1,
      pageSize: 50
    });

    console.log('Rooms:', rooms.rooms);

    // Get room messages
    const messages = await client.rooms.getMessages(room.roomId, {
      page: 1,
      pageSize: 50
    });

    console.log('Messages:', messages.messages);
