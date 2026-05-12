type SocialIconProps = {
  className?: string;
};

export function InstagramBadge({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookBadge({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M13.5 8.5V7.3c0-.8.5-1.3 1.2-1.3H16V3h-1.9C11.6 3 10 4.6 10 7v1.5H8v3h2V21h3.5v-9.5H16l.5-3h-3Z"
        fill="currentColor"
      />
    </svg>
  );
}