# Sử dụng Node.js official image
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json (hoặc yarn.lock)
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose port mà backend chạy
EXPOSE 5000

# Chạy ứng dụng
CMD ["node", "server.js"]
