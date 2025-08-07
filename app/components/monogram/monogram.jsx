import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* 👇 Path SVG đã được thay đổi thành chữ Q */}
          <path d="M47.5,14.5 A23.5,14 0 1,1 0.5,14.5 A23.5,14 0 1,1 47.5,14.5 Z M41,14.5 A17,7.5 0 1,0 7,14.5 A17,7.5 0 1,0 41,14.5 Z M28,21 L48,29 L41,29 L24,19 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});