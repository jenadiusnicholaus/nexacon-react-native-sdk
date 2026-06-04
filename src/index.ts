/**
 * Nexacon TypeScript/TypeScript SDK
 * Main entry point
 */

export { NexaconClient, ClientConfig } from "./client";
export {
  NexaconError,
  AuthenticationError,
  APIError,
  RateLimitError,
  ValidationError,
} from "./exceptions";
export { Auth } from "./auth";
export { Messaging } from "./messaging";
export { Calls } from "./calls";
export { Devices } from "./devices";
export { Rooms } from "./rooms";
export { Presence } from "./presence";

export const version = "1.0.0";
