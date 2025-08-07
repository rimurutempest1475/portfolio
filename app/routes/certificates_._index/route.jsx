import { json } from '@remix-run/node';
import { Certificates } from './certificates';

export const meta = () => [
  {
    title: 'Chứng chỉ',
  },
  {
    name: 'description',
    content:
      'Các chứng nhận và chứng chỉ tôi đã nhận được trong quá trình học tập và làm việc.',
  },
];

export const loader = async () => {
  
  const certificates = [
    {
      id: '1',
      title: 'Chứng nhận dự án được vào sách vàng sáng tạo Việt Nam',
      issuer: 'Trung Ương Mặt Trận Tổ Quốc Việt Nam',
      date: '2024-01-15',
      image: '/certificates/sachvang.png',
      description: 'Chứng chỉ đồng cấp bởi Bộ Khoa Học và Công Nghệ - Liên Hiệp các Hội KHKT Việt Nam ',
      featured: true,
    },
    {
      id: '2',
      title: 'Tomorrow Marketer Certified: Brand Development',
      issuer: 'Tomorrow Marketer',
      date: '2022-12',
      image: '/certificates/tomorrowmkt.png',
      description: 'Chứng chỉ phát triển thương hiệu',
      featured: false,
    },
    {
      id: '3',
      title: 'Canva Master Certificates',
      issuer: 'Canva Việt Nam',
      date: '2025-02-13',
      image: '/certificates/canva.png',
      description: 'Chứng chỉ thiết kế Canva chuyên nghiệp',
      featured: false,
    },
  ];

  const featured = certificates.find(cert => cert.featured);
  const others = certificates.filter(cert => !cert.featured);

  return json({ certificates: others, featured });
};

export { Certificates as default } from './certificates'; 