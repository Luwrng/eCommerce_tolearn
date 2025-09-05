# Sử dụng Node.js image cho React
FROM node:18 AS build

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package.json và cài đặt các phụ thuộc
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng React
RUN npm run build

# Tạo image nhỏ hơn để phục vụ ứng dụng
FROM nginx:alpine

# Copy các file build vào nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Chạy Nginx để phục vụ ứng dụng React
CMD ["nginx", "-g", "daemon off;"]
