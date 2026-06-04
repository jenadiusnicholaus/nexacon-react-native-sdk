Calls
=====

.. js:class:: Calls

    Calling service for audio/video calls.

Methods
-------

.. js:method:: Calls.initiateCall(params)

    Initiate a call to a recipient.

    :param params: Call parameters
    :type params: Object
    :param params.to: Recipient's phone number
    :type params.to: string
    :param params.callType: Type of call ('audio' or 'video')
    :type params.callType: string
    :param params.room: Room ID for the call
    :type params.room: string
    :returns: Call information
    :rtype: Promise<Object>

.. js:method:: Calls.endCall(callId)

    End an active call.

    :param callId: Call ID
    :type callId: string
    :returns: End call response
    :rtype: Promise<Object>

.. js:method:: Calls.getCallHistory(params)

    Get call history.

    :param params: Query parameters
    :type params: Object
    :param params.page: Page number (default: 1)
    :type params.page: number
    :param params.pageSize: Number of calls per page (default: 50)
    :type params.pageSize: number
    :returns: Call history
    :rtype: Promise<Object>

Example
-------

.. code-block:: typescript

    // Initiate a video call
    const call = await client.calls.initiateCall({
      to: '+255788811191',
      callType: 'video',
      room: 'my-room'
    });

    console.log('Call ID:', call.callId);

    // End the call
    await client.calls.endCall(call.callId);

    // Get call history
    const history = await client.calls.getCallHistory({
      page: 1,
      pageSize: 50
    });

    console.log('Calls:', history.calls);
