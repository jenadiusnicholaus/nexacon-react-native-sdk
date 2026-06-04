/**
 * Calls Module
 */

import { NexaconClient } from "./client";
import { ValidationError } from "./exceptions";

export interface InitiateCallParams {
  to: string;
  callType?: "audio" | "video" | "p2p";
  room?: string;
}

export interface InitiateGroupCallParams {
  participants: string[];
  callType?: "audio" | "video";
  room?: string;
}

export interface GetCallUrlParams {
  to: string;
  callType?: "audio" | "video" | "p2p" | "group";
  room?: string;
}

export class Calls {
  constructor(private client: NexaconClient) {}

  async initiateCall(params: InitiateCallParams): Promise<any> {
    if (!params.to) {
      throw new ValidationError("Recipient is required");
    }

    const data: any = {
      to: params.to,
      type: params.callType || "video",
    };

    if (params.room) {
      data.room = params.room;
    }

    return this.client.request("POST", "/nx/call/", data);
  }

  async initiateGroupCall(params: InitiateGroupCallParams): Promise<any> {
    if (!params.participants) {
      throw new ValidationError("At least one participant is required");
    }

    const data: any = {
      participants: params.participants,
      type: params.callType || "video",
    };

    if (params.room) {
      data.room = params.room;
    }

    return this.client.request("POST", "/nx/group-call/", data);
  }

  async getCallUrl(params: GetCallUrlParams): Promise<string> {
    if (!params.to) {
      throw new ValidationError("Recipient is required");
    }

    const data: any = {
      to: params.to,
      type: params.callType || "video",
    };

    if (params.room) {
      data.room = params.room;
    }

    const response = await this.client.request<{ call_url: string }>(
      "POST",
      "/nx/call-url/",
      data,
    );
    return response.call_url || "";
  }

  async declineCall(room: string): Promise<any> {
    if (!room) {
      throw new ValidationError("Room is required");
    }

    return this.client.request("POST", "/nx/call/decline/", { room });
  }
}
