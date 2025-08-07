import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import frenchText from './french-text.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Xin chào" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Mình là Quí, đang sống tại TP.Hồ Chí Minh. Đang là sinh viên năm cuối ngành Thương Mại Điện
      Tử tại HCMUTE. Lập trình Web & Digital Marketer với hơn 2 năm kinh nghiệm. Xây dựng
 các website và landing page nhanh, thân thiện với người dùng, tối ưu cho Core
 Web Vitals và khả năng hiển thị trên công cụ tìm kiếm SEO. Thành thạo
 HTML5, CSS3/Tailwind, JavaScript, React, Node.js, cơ sở dữ liệu
 MySQL/NoSQL và đặc biệt phát triển theme/plugin WordPress cũng như
 Elementor. Ngoài lập trình, mình lên kế hoạch và triển khai các chiến dịch đa
 kênh: quản lý lịch đăng mạng xã hội, chạy quảng cáo Meta/Google Ads, phân
 tích hiệu quả với Search Console. Có kỹ năng quay, dựng video và motion
 graphics để tạo nội dung quảng cáo và social hấp dẫn. Khả năng sử dụng và tiếp cận AI. <Link href="/uses">Xem thêm về dự án của mình</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Gửi cho mình một tin nhắn !!!
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Về tôi
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Tui đang cười mỉm ở Hà Nội"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${frenchText}#french-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
