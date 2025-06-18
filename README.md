# MARU Project

This repository contains the source code for the MARU project built with Next.js.

## Setup

1. Install dependencies using **pnpm**:
   ```bash
   pnpm install
   ```
2. Copy `.env.example` to `.env` and fill in the required values:
   ```bash
   cp .env.example .env
   ```
   - Update `GMAIL_APP_PASSWORD` with the Gmail application password used for sending contact form emails.
   - Set `NEXT_PUBLIC_SITE_URL` to your site's public URL. If omitted, `http://localhost:3000` is used in development.

3. Start the development server:
   ```bash
   pnpm dev
   ```
