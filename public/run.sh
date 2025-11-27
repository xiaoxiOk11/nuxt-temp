# 加载 .env.local
if [ -f .env.local ]; then
  set -a
  . ./.env.local
  set +a
fi

# 然后启动服务（使用已设置的环境变量）
echo "[run.sh] Starting server with environment variables..."
NITRO_PORT=12345 node  index.mjs