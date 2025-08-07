import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import { Image } from '~/components/image';
import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { formatDate } from '~/utils/date';
import styles from './certificate.module.css';

export const meta = ({ params }) => [
  {
    title: 'Chi tiết chứng chỉ',
  },
  {
    name: 'description',
    content: 'Thông tin chi tiết về chứng chỉ',
  },
];

export const loader = async ({ params }) => {
  const { id } = params;
  
  // Mock data cho chứng chỉ - có thể thay thế bằng dữ liệu thực
  const certificates = {
    '1': {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024-01-15',
      image: '/certificates/aws-sa.png',
      description: 'Chứng chỉ kiến trúc sư giải pháp AWS',
      details: 'Chứng chỉ này xác nhận khả năng thiết kế và triển khai các ứng dụng phân tán trên nền tảng AWS. Bao gồm kiến thức về kiến trúc hệ thống, bảo mật, hiệu suất và chi phí tối ưu.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Security'],
      validity: '3 năm',
      certificateId: 'AWS-SA-2024-001',
    },
    '2': {
      id: '2',
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023-12-20',
      image: '/certificates/azure-dev.png',
      description: 'Chứng chỉ phát triển ứng dụng trên Azure',
      details: 'Chứng chỉ này chứng minh khả năng phát triển, kiểm thử và duy trì các ứng dụng cloud trên Microsoft Azure. Bao gồm các dịch vụ Azure, CI/CD, và monitoring.',
      skills: ['Azure', 'C#', '.NET', 'DevOps'],
      validity: '2 năm',
      certificateId: 'MS-AZURE-DEV-2023-002',
    },
    '3': {
      id: '3',
      title: 'Google Cloud Professional Developer',
      issuer: 'Google',
      date: '2023-11-10',
      image: '/certificates/gcp-dev.png',
      description: 'Chứng chỉ phát triển chuyên nghiệp Google Cloud',
      details: 'Chứng chỉ này xác nhận khả năng phát triển và triển khai ứng dụng trên Google Cloud Platform. Bao gồm các dịch vụ GCP, containerization, và serverless computing.',
      skills: ['Google Cloud', 'Kubernetes', 'Docker', 'Python'],
      validity: '2 năm',
      certificateId: 'GCP-DEV-2023-003',
    },
  };

  const certificate = certificates[id];
  
  if (!certificate) {
    throw new Response('Not Found', { status: 404 });
  }

  return json({ certificate });
};

export default function CertificateDetail() {
  const { certificate } = useLoaderData();
  const formattedDate = formatDate(certificate.date);
  
  return (
    <div className={styles.container}>
      <Section className={styles.content}>
        <div className={styles.header}>
          <Link href="/certificates" className={styles.backLink}>
            ← Quay lại danh sách chứng chỉ
          </Link>
          <Heading level={1} className={styles.title}>
            {certificate.title}
          </Heading>
          <Text size="l" className={styles.issuer}>
            {certificate.issuer}
          </Text>
        </div>

        <div className={styles.main}>
          <div className={styles.imageContainer}>
            <Image
              src={certificate.image}
              alt={`Chứng chỉ ${certificate.title}`}
              className={styles.certificateImage}
              placeholder={`${certificate.image.split('.')[0]}-placeholder.jpg`}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.infoSection}>
              <Heading level={3} className={styles.sectionTitle}>
                Thông tin chứng chỉ
              </Heading>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <Text size="s" className={styles.label}>Ngày cấp:</Text>
                  <Text size="m">{formattedDate}</Text>
                </div>
                <div className={styles.infoItem}>
                  <Text size="s" className={styles.label}>Hiệu lực:</Text>
                  <Text size="m">{certificate.validity}</Text>
                </div>
                <div className={styles.infoItem}>
                  <Text size="s" className={styles.label}>Mã chứng chỉ:</Text>
                  <Text size="m">{certificate.certificateId}</Text>
                </div>
              </div>
            </div>

            <div className={styles.descriptionSection}>
              <Heading level={3} className={styles.sectionTitle}>
                Mô tả
              </Heading>
              <Text size="l" className={styles.description}>
                {certificate.description}
              </Text>
              <Text size="m" className={styles.details}>
                {certificate.details}
              </Text>
            </div>

            <div className={styles.skillsSection}>
              <Heading level={3} className={styles.sectionTitle}>
                Kỹ năng được chứng nhận
              </Heading>
              <div className={styles.skillsList}>
                {certificate.skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
} 