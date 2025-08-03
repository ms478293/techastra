# Techastra

A modern web application built with Vite, React, and Express.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run start
```

## Deployment

### Vercel Deployment

This application is configured for static deployment on Vercel. The current setup supports only the client-side React application as static files.

**Important Notes for Vercel:**
- Only the static build (React frontend) is supported on Vercel's standard deployment
- The Express server backend is not deployed with the static build
- Database connections and server-side routes are not available in the static deployment
- For full-stack functionality on Vercel, you would need to migrate server routes to Vercel serverless functions

The deployment configuration:
- Build output: `dist/` directory
- Build command: `npm run build` (uses `vite build`)
- Start command: `npm run start` (uses `vite preview`)

### Full-Stack Deployment

For deployments that support Node.js servers (like Railway, Render, or self-hosted):
- Use `npm run build:full` to build both client and server
- Use `npm run start:server` to start the Express server
- Make sure environment variables are properly configured

## Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build client for production (Vercel compatible)
- `npm run build:full` - Build both client and server for full-stack deployment
- `npm run start` - Preview static build locally (used by Vercel)
- `npm run start:server` - Start production Express server
- `npm run check` - Type check TypeScript files
- `npm run db:push` - Push database schema changes