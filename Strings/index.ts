import { z } from 'zod'

z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().email();
z.string().url();
z.string().emoji();
z.string().uuid();
z.string().cuid();
z.string().cuid2();
z.string().ulid();
//z.string().regex(/*regex*/);
//z.string().includes(string);
//z.string().startsWith(string);
//z.string().endsWith(string);
z.string().datetime(); // ISO 8601; default is without UTC offset, see below for options
z.string().ip(); // defaults to IPv4 and IPv6, see below for options

// transformations
z.string().trim(); // trim whitespace
z.string().toLowerCase(); // toLowerCase
z.string().toUpperCase(); // toUpperCase

z.string().min(5, { message: "Must be 5 or more characters long" });
z.string().max(5, { message: "Must be 5 or fewer characters long" });
z.string().length(5, { message: "Must be exactly 5 characters long" });
z.string().email({ message: "Invalid email address" });
z.string().url({ message: "Invalid url" });
z.string().emoji({ message: "Contains non-emoji characters" });
z.string().uuid({ message: "Invalid UUID" });
z.string().includes("tuna", { message: "Must include tuna" });
z.string().startsWith("https://", { message: "Must provide secure URL" });
z.string().endsWith(".com", { message: "Only .com domains allowed" });
z.string().datetime({ message: "Invalid datetime string! Must be UTC." });
z.string().ip({ message: "Invalid IP address" });
