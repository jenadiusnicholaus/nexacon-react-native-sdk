/**
 * Nexacon SDK Exception Classes
 */

export class NexaconError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NexaconError';
  }
}

export class AuthenticationError extends NexaconError {
  constructor(message: string = 'Authentication failed') {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class APIError extends NexaconError {
  public statusCode?: number;
  public response?: any;

  constructor(message: string, statusCode?: number, response?: any) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.response = response;
  }
}

export class RateLimitError extends APIError {
  constructor(message: string = 'Rate limit exceeded', statusCode: number = 429, response?: any) {
    super(message, statusCode, response);
    this.name = 'RateLimitError';
  }
}

export class ValidationError extends NexaconError {
  constructor(message: string = 'Validation failed') {
    super(message);
    this.name = 'ValidationError';
  }
}
