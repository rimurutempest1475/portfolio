# Trang Chứng chỉ

## Tổng quan
Trang chứng chỉ đã được tạo để thay thế trang Articles. Trang này hiển thị các chứng nhận và chứng chỉ đã nhận được.

## Cấu trúc

### Routes
- `/certificates` - Trang danh sách chứng chỉ
- `/certificates/:id` - Trang chi tiết chứng chỉ

### Files chính
- `app/routes/certificates_._index/route.jsx` - Route cho trang danh sách
- `app/routes/certificates_._index/certificates.jsx` - Component chính cho trang danh sách
- `app/routes/certificates_._index/certificates.module.css` - Styles cho trang danh sách
- `app/routes/certificates/route.jsx` - Route cho trang chi tiết

## Cách sử dụng

### Thêm chứng chỉ mới
1. Cập nhật dữ liệu trong `app/routes/certificates_._index/route.jsx`
2. Thêm hình ảnh vào thư mục `public/certificates/`
3. Cập nhật dữ liệu chi tiết trong `app/routes/certificates/route.jsx`

### Cấu trúc dữ liệu chứng chỉ
```javascript
{
  id: 'unique-id',
  title: 'Tên chứng chỉ',
  issuer: 'Tổ chức cấp',
  date: 'YYYY-MM-DD',
  image: '/certificates/image.png',
  description: 'Mô tả ngắn',
  featured: true/false, // Chứng chỉ nổi bật
  details: 'Mô tả chi tiết',
  skills: ['Kỹ năng 1', 'Kỹ năng 2'],
  validity: 'Thời hạn hiệu lực',
  certificateId: 'Mã chứng chỉ'
}
```

## Tính năng
- Hiển thị danh sách chứng chỉ với layout responsive
- Chứng chỉ nổi bật được hiển thị riêng biệt
- Trang chi tiết cho từng chứng chỉ
- Hỗ trợ hình ảnh và placeholder
- Animation và transition mượt mà

## Navigation
Đã cập nhật navigation để thay thế "Articles" bằng "Chứng chỉ" trong `app/layouts/navbar/nav-data.js` 