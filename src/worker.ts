// Worker script - static assets are served automatically via the assets binding
// This worker handles any requests that don't match static files

export default {
  async fetch(): Promise<Response> {
    // All requests are handled by the static assets binding
    // This fallback returns the index.html for SPA routing
    return new Response(null, { status: 404 });
  },
};

