import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { formatDate } from '~/utils/date';
import { classes } from '~/utils/style';
import styles from './certificates.module.css';

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

export const loader = async ({ params }) => {
  const certificate = certificates.find(cert => cert.id === params.id);
  if (!certificate) {
    throw new Response("Certificate not found", { status: 404 });
  }
  return json(certificate);
};

export default function CertificateDetail() {
  const certificate = useLoaderData();
  const formattedDate = formatDate(certificate.date);

  return (
    <Section className={styles.certificateDetail}>
      <div className={styles.detailContainer}>
        <Button 
          to="/certificates" 
          icon="chevron-left" 
          iconPosition="left"
          className={styles.backButton}
        >
          Quay lại danh sách
        </Button>
        
        <div className={styles.imageContainer}>
          <Image
            src={certificate.image}
            placeholder={`${certificate.image.split('.')[0]}-placeholder.jpg`}
            alt={certificate.title}
            className={styles.certificateImage}
          />
        </div>
        
        <div className={styles.contentContainer}>
          <Heading level={1} className={styles.title}>
            {certificate.title}
          </Heading>
          
          <div className={styles.meta}>
            <Text size="l" className={styles.issuer}>
              {certificate.issuer}
            </Text>
            <div className={styles.date}>
              <Divider notchWidth="64px" notchHeight="8px" />
              <Text size="l">{formattedDate}</Text>
            </div>
          </div>
          
          <Text size="l" className={styles.description}>
            {certificate.description}
          </Text>
        </div>
      </div>
      <Footer />
    </Section>
  );
}