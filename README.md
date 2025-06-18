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
The contact form uses Gmail to forward messages and can optionally submit to a Google Form.
Set the following variables:

```bash
cp .env.example .env
# Edit .env and set the following variables
# GMAIL_APP_PASSWORD - Gmail application password
# CONTACT_EMAIL - account used to send and receive form mail
# GOOGLE_FORM_ACTION_URL - optional Google Form endpoint
```

## Development server

Start the Next.js development server with:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000` by default.
