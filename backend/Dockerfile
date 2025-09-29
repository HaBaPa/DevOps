# Sử dụng Node.js LTS
FROM node:18

# Thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port (ví dụ 3000)
EXPOSE 3000

# Lệnh chạy app
CMD ["node", "src/index.js"]
