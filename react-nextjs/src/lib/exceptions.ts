// This file contains custom exceptions
// that can be used in the application

import { type } from "os";

// Simple custom exception for post not found
class PostError extends Error {
  constructor(message: string = "Post not found") {
    super(message);
    this.name = this.constructor.name;
  }
}

type PostErrorType = PostError;

export { PostError, type PostErrorType };
