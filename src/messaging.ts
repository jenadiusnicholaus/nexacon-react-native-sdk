/**
 * Messaging Module
 */

import { NexaconClient } from './client';
import { ValidationError } from './exceptions';

export interface SendMessageParams {
  to: string;
  message: string;
  messageType?: string;
}

export interface BroadcastParams {
  message: string;
  recipients: string[];
}

export class Messaging {
  constructor(private client: NexaconClient) {}

  async send(params: SendMessageParams): Promise<any> {
    if (!params.to || !params.message) {
      throw new ValidationError('Recipient and message are required');
    }

    const data = {
      to: params.to,
      message: params.message,
      type: params.messageType || 'chat',
    };

    return this.client.request('POST', '/nx/message/', data);
  }

  async broadcast(params: BroadcastParams): Promise<any> {
    if (!params.message || !params.recipients) {
      throw new ValidationError('Message and recipients are required');
    }

    const data = {
      message: params.message,
      recipients: params.recipients,
    };

    return this.client.request('POST', '/nx/broadcast/', data);
  }

  async getContacts(): Promise<any[]> {
    const response = await this.client.request<{ contacts: any[] }>('GET', '/nx/contacts/');
    return response.contacts || [];
  }

  async addContact(nxid: string): Promise<any> {
    if (!nxid) {
      throw new ValidationError('nxid is required');
    }

    return this.client.request('POST', '/nx/contacts/', { nxid });
  }

  async removeContact(nxid: string): Promise<any> {
    if (!nxid) {
      throw new ValidationError('nxid is required');
    }

    return this.client.request('DELETE', `/nx/contacts/${nxid}/`);
  }
}
