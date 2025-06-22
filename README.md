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
The project requires several environment variables:

* `GMAIL_APP_PASSWORD` – your Gmail application password
* `CONTACT_EMAIL` – the Gmail address used by the contact form
* `NEXT_PUBLIC_SITE_URL` – the base URL of the website used for SEO metadata

Set both variables in `.env` before running the application:

```bash
cp .env.example .env
# Edit .env and set GMAIL_APP_PASSWORD, CONTACT_EMAIL and NEXT_PUBLIC_SITE_URL
```

## Development server

Start the Next.js development server with:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000` by default.

## Theme

This project uses a fixed design. Switching between dark and light modes is not required.
