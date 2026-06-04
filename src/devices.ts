/**
 * Devices Module
 */

import { NexaconClient } from './client';
import { ValidationError } from './exceptions';

export interface RegisterDeviceParams {
  fcmToken: string;
  platform?: 'android' | 'ios' | 'web';
  deviceName?: string;
}

export class Devices {
  constructor(private client: NexaconClient) {}

  async register(params: RegisterDeviceParams): Promise<any> {
    if (!params.fcmToken) {
      throw new ValidationError('FCM token is required');
    }

    const data: any = {
      fcm_token: params.fcmToken,
      platform: params.platform || 'android',
    };

    if (params.deviceName) {
      data.device_name = params.deviceName;
    }

    return this.client.request('POST', '/nx/register-device/', data);
  }

  async unregister(fcmToken: string): Promise<any> {
    if (!fcmToken) {
      throw new ValidationError('FCM token is required');
    }

    return this.client.request('DELETE', '/nx/register-device/', { fcm_token: fcmToken });
  }

  async listDevices(): Promise<any[]> {
    const response = await this.client.request<{ devices: any[] }>('GET', '/nx/devices/');
    return response.devices || [];
  }

  async revokeDevice(deviceId: string): Promise<any> {
    if (!deviceId) {
      throw new ValidationError('Device ID is required');
    }

    return this.client.request('DELETE', `/nx/devices/${deviceId}/`);
  }
}
