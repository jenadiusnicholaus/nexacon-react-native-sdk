/**
 * Nexacon SDK Main Client
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthenticationError, APIError, ValidationError } from "./exceptions";
import { Auth } from "./auth";
import { Messaging } from "./messaging";
import { Calls } from "./calls";
import { Devices } from "./devices";
import { Rooms } from "./rooms";
import { Presence } from "./presence";

export interface ClientConfig {
  apiKey: string;
  secretKey: string;
  baseUrl?: string;
  timeout?: number;
}

export class NexaconClient {
  private apiKey: string;
  private secretKey: string;
  private baseUrl: string;
  private timeout: number;
  private axiosInstance: AxiosInstance;
  private nxToken: string | null = null;

  public auth: Auth;
  public messaging: Messaging;
  public calls: Calls;
  public devices: Devices;
  public rooms: Rooms;
  public presence: Presence;

  constructor(config: ClientConfig) {
    this.apiKey = config.apiKey;
    this.secretKey = config.secretKey;
    this.baseUrl = (
      config.baseUrl || "https://nxservice.quantumvision-tech.com/api/v1.0"
    ).replace(/\/$/, "");
    this.timeout = config.timeout || 30000;

    this.axiosInstance = axios.create({
      timeout: this.timeout,
    });

    // Initialize service modules
    this.auth = new Auth(this);
    this.messaging = new Messaging(this);
    this.calls = new Calls(this);
    this.devices = new Devices(this);
    this.rooms = new Rooms(this);
    this.presence = new Presence(this);
  }

  async request<T = any>(
    method: string,
    endpoint: string,
    data?: any,
    params?: any,
    headers?: any,
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const requestHeaders: any = {
      "Content-Type": "application/json",
      "X-API-Key": this.apiKey,
      "X-Secret-Key": this.secretKey,
    };

    if (this.nxToken) {
      requestHeaders["X-NX-Token"] = this.nxToken;
    }

    if (headers) {
      Object.assign(requestHeaders, headers);
    }

    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request({
        method,
        url,
        data,
        params,
        headers: requestHeaders,
      });

      return response.data;
    } catch (error: any) {
      if (error.response) {
        const status = error.response.status;

        if (status === 401) {
          throw new AuthenticationError("Authentication failed");
        } else if (status === 429) {
          throw new APIError(
            "Rate limit exceeded",
            status,
            error.response.data,
          );
        } else if (status >= 400) {
          const errorMessage =
            error.response.data?.error || "API request failed";
          throw new APIError(errorMessage, status, error.response.data);
        }
      } else if (error.code === "ECONNABORTED") {
        throw new APIError("Request timeout");
      }

      throw new APIError(`Request failed: ${error.message}`);
    }
  }

  setToken(token: string): void {
    this.nxToken = token;
  }

  getToken(): string | null {
    return this.nxToken;
  }

  close(): void {
    // Cleanup if needed
  }
}
