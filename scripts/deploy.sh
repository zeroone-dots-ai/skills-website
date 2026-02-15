#!/bin/bash
set -e

VPS="root@72.62.229.16"
REMOTE_DIR="/opt/services/skills-website"

echo "==> Syncing files to VPS..."
rsync -avz --exclude node_modules --exclude .git --exclude dist \
  /Users/meetdeshani/Desktop/skills-website/ $VPS:$REMOTE_DIR/

echo "==> Building and deploying..."
ssh $VPS "cd /opt/services && docker compose build skills-website && docker compose up -d skills-website && docker exec nginx nginx -s reload"

echo "==> Done! Visit https://skills.dotsai.cloud"
