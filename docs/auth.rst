Authentication
==============

.. js:class:: Auth

    Authentication service for user login and token management.

Methods
-------

.. js:method:: Auth.login(credentials)

    Login a user with username and password.

    :param credentials: Login credentials
    :type credentials: Object
    :param credentials.username: User's username or phone number
    :type credentials.username: string
    :param credentials.password: User's password
    :type credentials.password: string
    :returns: Authentication response with access token
    :rtype: Promise<Object>

.. js:method:: Auth.refreshToken(refreshToken)

    Refresh an expired access token using a refresh token.

    :param refreshToken: Refresh token
    :type refreshToken: string
    :returns: New authentication response
    :rtype: Promise<Object>

.. js:method:: Auth.logout()

    Logout the current user and invalidate the token.

    :returns: Logout response
    :rtype: Promise<Object>

Example
-------

.. code-block:: typescript

    // Login
    const token = await client.auth.login({
      username: 'user@example.com',
      password: 'password'
    });

    console.log('Access token:', token.access_token);
    console.log('Refresh token:', token.refresh_token);

    // Set token for subsequent requests
    client.setToken(token.access_token);

    // Refresh token
    const newToken = await client.auth.refreshToken(token.refresh_token);
    client.setToken(newToken.access_token);

    // Logout
    await client.auth.logout();
