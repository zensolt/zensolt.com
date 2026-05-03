export type IconName =
  | "arrow"
  | "check"
  | "chevron-down"
  | "close"
  | "spark"
  | "support"
  | "bot"
  | "web"
  | "mobile"
  | "cloud"
  | "cpu"
  | "plug"
  | "shield"
  | "gear"
  | "flask"
  | "rocket"
  | "fin"
  | "edu"
  | "health"
  | "cart"
  | "truck"
  | "mail"
  | "pin"
  | "phone"
  | "user";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 18, className }: IconProps) {
  const s = {
    width: size,
    height: size,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const cls = className ?? undefined;
  switch (name) {
    case "arrow":
      return (
        <svg
          viewBox="0 0 24 24"
          {...s}
          className={`arrow${cls ? ` ${cls}` : ""}`}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M6 6l12 12M18 6l-12 12" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2" />
        </svg>
      );
    case "support":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      );
    case "bot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle> <path d="M12 7v4"></path>
            <line x1="8" y1="16" x2="8" y2="16"></line>
            <line x1="16" y1="16" x2="16" y2="16"></line>
          </g>
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <circle cx="6" cy="6.5" r=".5" fill="currentColor" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M7 18a4 4 0 1 1 .7-7.94A6 6 0 0 1 19 12a4 4 0 0 1-1 7.87z" />
        </svg>
      );
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
      );
    case "plug":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M12 22v-4M9 9V5M15 9V5M7 9h10v3a5 5 0 0 1-10 0z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
      );
    case "flask":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M9 2v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L15 8V2M8 2h8" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M12 2c4 3 6 7 6 11l-3 4H9l-3-4c0-4 2-8 6-11z" />
          <circle cx="12" cy="11" r="2" />
          <path d="M9 17l-3 5M15 17l3 5" />
        </svg>
      );
    case "fin":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M3 7h18M3 17h18M7 7v10M17 7v10" />
        </svg>
      );
    case "edu":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M2 9l10-5 10 5-10 5z" />
          <path d="M6 11v5a8 8 0 0 0 12 0v-5" />
        </svg>
      );
    case "health":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
          <path d="M9 11h2v-2h2v2h2v2h-2v2h-2v-2H9z" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
          <path d="M3 4h2l3 11h11l2-7H6" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M2 7h12v10H2zM14 10h5l3 3v4h-8z" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 7 9-7" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2z" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" {...s} className={cls}>
          <circle cx="12" cy="8.5" r="3.5" />
          <path d="M5 20c1.2-4 4.4-6 7-6s5.8 2 7 6" />
        </svg>
      );
    default:
      return null;
  }
}
