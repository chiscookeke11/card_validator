# Card Validator API

A lightweight TypeScript + Express API that validates payment card numbers using the **Luhn algorithm**.

This project exposes one HTTP endpoint that accepts a card number and returns whether it is valid according to Luhn checksum rules.

---

## Project explanation

### What this project does

- Accepts a card number via a JSON API request.
- Normalizes the value by removing non-digit characters.
- Runs Luhn validation logic.
- Returns a structured JSON response with `isValid: true | false`.

### How it is organized

- **App bootstrap**: `src/app.ts`
- **Route definition**: `src/routes/card.routes.ts`
- **Controller (request validation + response)**: `src/controllers/card.controllers.ts`
- **Business logic (Luhn algorithm)**: `src/utils/logic.ts`
- **Tests**: `tests/card.test.ts`

---

## Dependencies / tools used

### Runtime dependencies

- **express**: HTTP server and routing.
- **nodemon**: Automatically restarts the app during development.

### Development dependencies

- **typescript**: TypeScript compiler.
- **ts-node**: Execute TypeScript directly in Node.
- **jest**: Test runner.
- **ts-jest**: Jest transformer for TypeScript.
- **@types/** packages: Type definitions for Node, Express, and Jest.

### Supporting config

- **`tsconfig.json`**: TypeScript compiler options.
- **`jest.config.cjs`**: Jest test setup (CommonJS config for ESM project compatibility).

---

## Setup

### 1) Prerequisites

- Node.js (recommend current LTS)
- npm

### 2) Install dependencies

```bash
npm install
```

---

## Running the app

### Development mode

Starts server with file watching:

```bash
npm run dev
```

Server runs on:

```text
http://localhost:3000
```

### Production-style run

The project currently defines:

```bash
npm run start
```

which expects compiled output at `dist/app.js`.

If you need a fresh build first, compile TypeScript before start (for example with `npx tsc`), then run `npm run start`.

---

## API usage

### Endpoint

`POST /api/validate-card`

### Request body

```json
{
  "cardNumber": "4539578763621486"
}
```

### Successful response

```json
{
  "success": true,
  "data": {
    "cardNumber": "4539578763621486",
    "isValid": true
  }
}
```

### Validation error examples

If `cardNumber` is missing:

```json
{
  "success": false,
  "message": "cardNumber is required"
}
```

If `cardNumber` is not a string:

```json
{
  "success": false,
  "message": "cardNumber must be a string"
}
```

### Quick curl example

```bash
curl -X POST http://localhost:3000/api/validate-card \
  -H "Content-Type: application/json" \
  -d '{"cardNumber":"4539578763621486"}'
```

---

## Running tests

This repository includes Jest tests for the Luhn validation utility.

Run tests with:

```bash
npm test
```

If you want a watch mode during development:

```bash
npx jest --watch
```

---

## Notes

- The API checks Luhn validity, not whether a card is active, funded, or issued.
- Non-digit characters in the input are stripped before validation.
