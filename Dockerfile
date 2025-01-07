# --------------------------------------------------------
# Step 1: Next.js Build 
# --------------------------------------------------------
FROM node:18-alpine AS builder

# set workfolder within the container
WORKDIR /app

# copy dependecy folders
COPY package*.json ./

# install dependeces (npm version)
RUN npm install

# copy work directory
COPY . .

# projetc run build Next.js
RUN npm run build

# --------------------------------------------------------
# Step 2: Runtime
# --------------------------------------------------------
FROM node:18-alpine AS runner

# set workfolder
WORKDIR /app

# copy in builder only essencials dependecys
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

# Expose port 3000 (default)
EXPOSE 3000

# cmd initialization run server Next.js
CMD ["npm", "run", "start"]

