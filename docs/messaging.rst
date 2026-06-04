Messaging
=========

.. js:class:: Messaging

    Messaging service for sending and receiving messages.

Methods
-------

.. js:method:: Messaging.send(message)

    Send a message to a recipient.

    :param message: Message object
    :type message: Object
    :param message.to: Recipient's phone number or JID
    :type message.to: string
    :param message.message: Message content
    :type message.message: string
    :param message.messageType: Message type (default: 'chat')
    :type message.messageType: string
    :returns: Send message response
    :rtype: Promise<Object>

.. js:method:: Messaging.getHistory(params)

    Get message history for a recipient.

    :param params: Query parameters
    :type params: Object
    :param params.recipient: Recipient's phone number or JID
    :type params.recipient: string
    :param params.page: Page number (default: 1)
    :type params.page: number
    :param params.pageSize: Number of messages per page (default: 50)
    :type params.pageSize: number
    :returns: Message history
    :rtype: Promise<Object>

Example
-------

.. code-block:: typescript

    // Send a message
    await client.messaging.send({
      to: '+255788811191',
      message: 'Hello!'
    });

    // Get message history
    const history = await client.messaging.getHistory({
      recipient: '+255788811191',
      page: 1,
      pageSize: 50
    });

    console.log('Messages:', history.messages);
