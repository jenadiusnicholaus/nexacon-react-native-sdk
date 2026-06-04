/**
 * Rooms Service - Group chat room management
 */

import { NexaconClient } from './client';
import { ValidationError } from './exceptions';

export interface RoomCreateParams {
  name?: string;
  title?: string;
  description?: string;
  avatar_url?: string;
}

export interface RoomMemberParams {
  nxid: string;
  affiliation?: string;
}

export class Rooms {
  constructor(private client: NexaconClient) {}

  async list(): Promise<any> {
    return this.client.request('GET', '/nx/rooms/');
  }

  async create(params: RoomCreateParams): Promise<any> {
    if (!params.name && !params.title) {
      throw new ValidationError("Either 'name' or 'title' is required");
    }

    const data: any = {};
    if (params.name) data.name = params.name;
    if (params.title) data.title = params.title;
    if (params.description) data.description = params.description;
    if (params.avatar_url) data.avatar_url = params.avatar_url;

    return this.client.request('POST', '/nx/rooms/', data);
  }

  async get(name: string): Promise<any> {
    if (!name) {
      throw new ValidationError('Room name is required');
    }

    return this.client.request('GET', `/nx/rooms/${name}/`);
  }

  async destroy(name: string): Promise<any> {
    if (!name) {
      throw new ValidationError('Room name is required');
    }

    return this.client.request('DELETE', `/nx/rooms/${name}/`);
  }

  async addMember(name: string, params: RoomMemberParams): Promise<any> {
    if (!name) {
      throw new ValidationError('Room name is required');
    }
    if (!params.nxid) {
      throw new ValidationError('nxid is required');
    }

    const data: any = {
      nxid: params.nxid,
      affiliation: params.affiliation || 'member',
    };

    return this.client.request('POST', `/nx/rooms/${name}/members/`, data);
  }

  async removeMember(name: string, nxid: string): Promise<any> {
    if (!name) {
      throw new ValidationError('Room name is required');
    }
    if (!nxid) {
      throw new ValidationError('nxid is required');
    }

    return this.client.request('DELETE', `/nx/rooms/${name}/members/${nxid}/`);
  }
}
