import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Các Dự Án',
    description: 'Danh sách các dự án đã tham gia phát triển',
  });
};

const platformData = [
  {
    name: 'ndtechs.vn',
    url: 'https://ndtechs.vn/',
    description: 'Cung cấp linh kiện máy tính, laptop HP và AMD',
  },
  {
    name: 'beyondthevines.com',
    url: 'https://www.beyondthevines.com/',
    description: 'Thời trang túi xách thiết kế hiện đại',
  },
  {
    name: 'hshop.vn',
    url: 'https://hshop.vn/',
    description: 'Công nghệ và khuyến mãi linh kiện máy tính',
  },
  {
    name: 'tinhocngoisao.com',
    url: 'https://tinhocngoisao.com/',
    description: 'Giải pháp IT và dịch vụ sửa chữa (trong team)',
  },
  {
    name: 'gieoduyen.com',
    url: 'https://gieoduyen.com/',
    description: 'Tạo thiệp cưới và mua thiệp online',
  },
];

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Các Dự Án"
          description="Danh sách các dự án đã tham gia phát triển và đóng góp"
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Dự Án Nổi Bật</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  {platformData.map((platform, index) => (
                    <ListItem key={index}>
                      <Link href={platform.url}>{platform.name}</Link>:{' '}
                      {platform.description}
                    </ListItem>
                  ))}
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
