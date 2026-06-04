/**
 * Presence Service - User presence and online status
 */

import { NexaconClient } from './client';

export class Presence {
  constructor(private client: NexaconClient) {}

  async get(user?: string): Promise<any> {
    const params: any = {};
    if (user) params.user = user;

    return this.client.request('GET', '/nx/presence/', undefined, params);
  }
}
