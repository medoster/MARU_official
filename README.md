# MARU Project

This repository contains the source code for the MARU project built with Next.js.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher is recommended)
- [pnpm](https://pnpm.io/) package manager

## Installation

Install all project dependencies with pnpm:

```bash
pnpm install
```

## Configuration

Copy `.env.example` to `.env` and fill in the required values.
The only environment variable currently required is the Gmail application password
used for sending emails from the contact form:

```bash
cp .env.example .env
# Edit .env and set GMAIL_APP_PASSWORD
```

## Development server

Start the Next.js development server with:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000` by default.
