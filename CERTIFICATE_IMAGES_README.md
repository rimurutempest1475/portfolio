# Hướng dẫn thêm ảnh chứng chỉ

## Cách thêm ảnh chứng chỉ

### 1. Thêm ảnh vào thư mục
- Đặt ảnh chứng chỉ vào thư mục `public/certificates/`
- Đặt tên file theo format: `[tên-chứng-chỉ].png` hoặc `[tên-chứng-chỉ].jpg`

### 2. Cập nhật dữ liệu chứng chỉ
Trong file `app/routes/certificates_._index/route.jsx`, cập nhật đường dẫn ảnh:

```javascript
{
  id: '1',
  title: 'AWS Certified Solutions Architect',
  issuer: 'Amazon Web Services',
  date: '2024-01-15',
  image: '/certificates/aws-sa.png', // ← Cập nhật đường dẫn này
  description: 'Chứng chỉ kiến trúc sư giải pháp AWS',
  featured: true,
}
```

### 3. Cập nhật dữ liệu chi tiết
Trong file `app/routes/certificates/route.jsx`, cập nhật đường dẫn ảnh tương tự:

```javascript
'1': {
  id: '1',
  title: 'AWS Certified Solutions Architect',
  issuer: 'Amazon Web Services',
  date: '2024-01-15',
  image: '/certificates/aws-sa.png', // ← Cập nhật đường dẫn này
  description: 'Chứng chỉ kiến trúc sư giải pháp AWS',
  // ... các thông tin khác
}
```

## Ví dụ ảnh chứng chỉ

### Ảnh mẫu cần thêm:
1. `aws-sa.png` - AWS Solutions Architect
2. `azure-dev.png` - Microsoft Azure Developer
3. `gcp-dev.png` - Google Cloud Professional Developer

### Kích thước ảnh khuyến nghị:
- **Desktop**: 800x600px hoặc 1200x800px
- **Mobile**: Tối thiểu 400x300px
- **Format**: PNG hoặc JPG
- **Chất lượng**: Tối thiểu 72 DPI

## Tính năng hiển thị ảnh

### Trang danh sách chứng chỉ (`/certificates`):
- Ảnh được hiển thị cho chứng chỉ nổi bật (featured)
- Ảnh có hiệu ứng hover và animation

### Trang chi tiết chứng chỉ (`/certificates/:id`):
- Ảnh được hiển thị lớn ở bên trái
- Có hiệu ứng hover và shadow
- Responsive trên mobile

## Lưu ý
- Đảm bảo ảnh có độ phân giải tốt
- Tối ưu kích thước file để tải nhanh
- Sử dụng format PNG cho ảnh có text
- Sử dụng format JPG cho ảnh ảnh thực tế 