/**
 * Authentication Module
 */

import { NexaconClient } from "./client";
import { AuthenticationError, ValidationError } from "./exceptions";

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  password: string;
  username?: string;
  phone?: string;
}

export class Auth {
  constructor(private client: NexaconClient) {}

  async login(params: LoginParams): Promise<string> {
    if (!params.username || !params.password) {
      throw new ValidationError("Username and password are required");
    }

    const response = await this.client.request<{ token: string }>(
      "POST",
      "/auth/login/",
      params,
    );

    if (!response.token) {
      throw new AuthenticationError("No token returned from server");
    }

    this.client.setToken(response.token);
    return response.token;
  }

  async register(params: RegisterParams): Promise<any> {
    if (!params.email || !params.password) {
      throw new ValidationError("Email and password are required");
    }

    return this.client.request("POST", "/auth/register/", params);
  }

  async logout(): Promise<any> {
    const response = await this.client.request("POST", "/auth/logout/");
    this.client.setToken("");
    return response;
  }

  async refreshToken(): Promise<string> {
    if (!this.client.getToken()) {
      throw new AuthenticationError("No token to refresh");
    }

    const response = await this.client.request<{ token: string }>(
      "POST",
      "/auth/refresh/",
    );

    if (!response.token) {
      throw new AuthenticationError("No token returned from server");
    }

    this.client.setToken(response.token);
    return response.token;
  }

  async getUser(): Promise<any> {
    return this.client.request("GET", "/auth/user/");
  }
}
