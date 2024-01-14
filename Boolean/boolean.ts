import { z } from 'zod'

const isActive = z.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive must be a boolean",
  });