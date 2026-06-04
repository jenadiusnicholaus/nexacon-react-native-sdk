# Nexacon React Native SDK

React Native SDK for Nexacon API - Authentication, Messaging, Calls, and IoT Device Management.

## Installation

```bash
npm install @nexacon/react-native-sdk
# or
yarn add @nexacon/react-native-sdk
```

## Quick Start

```javascript
import { NexaconClient } from '@nexacon/react-native-sdk';

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
```

## Features

- **Authentication**: User login, token management
- **Messaging**: Send/receive messages, manage contacts
- **Calls**: Initiate audio/video calls, group calls
- **Devices**: Register devices for push notifications
- **Cross-platform**: Works on iOS and Android

## Documentation

Full documentation at [docs.nexacon.com](https://docs.nexacon.com)

## License

MIT License - see LICENSE file for details.
