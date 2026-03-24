fuser -k 1234/tcp 2>/dev/null || true
node apps/realtime/server.mjs &
npm run dev --prefix apps/web -- --host
