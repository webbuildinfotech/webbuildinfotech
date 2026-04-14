import React from 'react';

/**
 * Icons: common Icon wrapper + all named icons in one file.
 */

function Icon({ iconClass, className = '', ...props }) {
  return (
    <span
      className={`${iconClass} ${className}`.trim()}
      aria-hidden
      {...props}
    />
  );
}

export default Icon;

// Trash / delete
export function TrashIcon({ className = '' }) {
  return <Icon iconClass="icon-[solar--trash-bin-trash-bold]" className={className} />;
}

// Edit / pen
export function PenIcon({ className = '' }) {
  return <Icon iconClass="icon-[solar--pen-bold]" className={className} />;
}

// Search / magnify
export function SearchIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--magnify]" className={className} />;
}

// Password visibility (show / hide)
export function EyeIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline--eye-optic]" className={className} />;
}

export function EyeOffIcon({ className = '' }) {
  return <Icon iconClass="icon-[ph--eye-closed-duotone]" className={className} />;
}

// Close (modal / drawer)
export function CloseIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--close]" className={className} />;
}

// Kebab / more actions (vertical three dots)
export function DotsVerticalIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--dots-vertical]" className={className} />;
}

// Chevron down (dropdowns)
export function ChevronDownIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chevron-down]" className={className} />;
}

// Chevron up (e.g. sort ascending)
export function ChevronUpIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chevron-up]" className={className} />;
}

// Arrow up (solar linear)
export function ArrowUpIcon({ className = '' }) {
  return <Icon iconClass="icon-[solar--arrow-up-linear]" className={className} />;
}

// Chevron left/right (pagination)
export function ChevronLeftIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chevron-left]" className={className} />;
}

export function ChevronRightIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chevron-right]" className={className} />;
}

// Plus (add / new)
export function PlusIcon({ className = '' }) {
  return <Icon iconClass="icon-[pepicons-pop--plus]" className={className} />;
}

// Open in new / external link
export function OpenInNewIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--open-in-new]" className={className} />;
}

// Admin nav
export function DashboardIcon({ className = '' }) {
  return <Icon iconClass="icon-[line-md--speedometer-loop]" className={className} />;
}

// Admin dashboard welcome (duo style)
export function DashboardDuoIcon({ className = '' }) {
  return <Icon iconClass="icon-[duo-icons--dashboard]" className={className} />;
}

export function HomeContentIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline-plump--home-1-solid]" className={className} />;
}

export function LicensesIcon({ className = '' }) {
  return <Icon iconClass="icon-[game-icons--chalice-drops]" className={className} />;
}

export function CategoriesIcon({ className = '' }) {
  return <Icon iconClass="icon-[solar--tag-bold-duotone]" className={className} />;
}

export function ProductsIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline-ultimate--products-gifts-bold]" className={className} />;
}

export function ServicesIcon({ className = '' }) {
  return <Icon iconClass="icon-[grommet-icons--services]" className={className} />;
}

export function AiBrainIcon({ className = '' }) {
  return <Icon iconClass="icon-[hugeicons--ai-brain-03]" className={className} />;
}

export function CloudPlansIcon({ className = '' }) {
  return <Icon iconClass="icon-[emojione-monotone--cloud]" className={className} />;
}

export function EnquiriesIcon({ className = '' }) {
  return <Icon iconClass="icon-[fluent--mail-48-filled]" className={className} />;
}

export function BlogsIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline-freehand--book-bookmark]" className={className} />;
}

// Header / layout
export function PhoneIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--phone]" className={className} />;
}

export function EmailOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--email-outline]" className={className} />;
}

export function EmailEditIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--email-edit-outline]" className={className} />;
}

export function DownloadIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--download]" className={className} />;
}

export function WeatherSunnyIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--weather-sunny]" className={className} />;
}

export function WeatherNightIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--weather-night]" className={className} />;
}

export function ShieldAccountIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--shield-account]" className={className} />;
}

export function AccountCircleIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account-circle]" className={className} />;
}

export function AccountOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account-outline]" className={className} />;
}

export function LogoutIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--logout]" className={className} />;
}

export function LoginIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--login]" className={className} />;
}

export function CartOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--cart-outline]" className={className} />;
}

// Menu (hamburger)
export function MenuIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--menu]" className={className} />;
}

// Profile / user (la user-secret)
export function UserSecretIcon({ className = '' }) {
  return <Icon iconClass="icon-[la--user-secret]" className={className} />;
}

// Video play / pause
export function PlayIcon({ className = '' }) {
  return <Icon iconClass="icon-[stash--play-btn-light]" className={className} />;
}

export function PauseIcon({ className = '' }) {
  return <Icon iconClass="icon-[si--pause-presentation-line]" className={className} />;
}

// List / bulleted (plans, lists)
export function FormatListBulletedIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--format-list-bulleted]" className={className} />;
}

// Home featured addons specific
export function PackageVariantIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--package-variant]" className={className} />;
}

export function ArrowRightIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--arrow-right]" className={className} />;
}

export function AppsIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--apps]" className={className} />;
}

// Admin: Projects (portfolio)
export function ProjectsIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--briefcase-outline]" className={className} />;
}

// Technology / React info pages
export function CodeIcon({ className = '' }) {
  return <Icon iconClass="icon-[solar--code-square-bold-duotone]" className={className} />;
}

export function PaintBrushIcon({ className = '' }) {
  return <Icon iconClass="icon-[glyphs--pencil-paintbrush-duo]" className={className} />;
}

export function MobileIcon({ className = '' }) {
  return <Icon iconClass="icon-[ic--twotone-phone-iphone]" className={className} />;
}

export function CogsIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--cog-outline]" className={className} />;
}

export function CloudIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--cloud-outline]" className={className} />;
}

export function DatabaseIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--database-outline]" className={className} />;
}

export function CardExchangeIcon({ className = '' }) {
  return <Icon iconClass="icon-[game-icons--card-exchange]" className={className} />;
}

export function RocketIcon({ className = '' }) {
  return <Icon iconClass="icon-[uim--rocket]" className={className} />;
}

export function ShieldAltIcon({ className = '' }) {
  return <Icon iconClass="icon-[ph--shield-check-duotone]" className={className} />;
}

export function ChartLineIcon({ className = '' }) {
  return <Icon iconClass="icon-[lucide--chart-spline]" className={className} />;
}

export function CheckCircleOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--check-circle-outline]" className={className} />;
}

export function MessageTextOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--message-text-outline]" className={className} />;
}

export function AccountIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account]" className={className} />;
}

export function FileIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--file]" className={className} />;
}

export function CheckMarkIcon({ className = '' }) {
  return <Icon iconClass="icon-[game-icons--check-mark]" className={className} />;
}

export function CogLoopIcon({ className = '' }) {
  return <Icon iconClass="icon-[line-md--cog-loop]" className={className} />;
}

export function CloudIbmIcon({ className = '' }) {
  return <Icon iconClass="icon-[carbon--ibm-cloud]" className={className} />;
}

export function ArrowLeftIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--arrow-left]" className={className} />;
}

export function CodeSquareIcon({ className = '' }) {
  return <Icon iconClass="icon-[proicons--code-square]" className={className} />;
}

export function HtmlIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--html]" className={className} />;
}

export function JavascriptIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--javascript]" className={className} />;
}

export function JavascriptIcon16({ className = '' }) {
  return <Icon iconClass="icon-[fa7-brands--js-square]" className={className} />;
}

export function NodeJsIcon({ className = '' }) {
  return <Icon iconClass="icon-[logos--nodejs-icon]" className={className} />;
}

export function NodeJsIcon16({ className = '' }) {
  return <Icon iconClass="icon-[nonicons--node-16]" className={className} />;
}

export function TailwindCssIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--tailwindcss-dark]" className={className} />;
}

export function ExpressJsIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--expressjs-light]" className={className} />;
}

export function Css3Icon({ className = '' }) {
  return <Icon iconClass="icon-[devicon--css3]" className={className} />;
}

export function ReactLogoIcon({ className = '' }) {
  return <Icon iconClass="icon-[logos--react]" className={className} />;
}

export function ReactLogoIcon16({ className = '' }) {
  return <Icon iconClass="icon-[proicons--reactjs]" className={className} />;
}

export function MongoDbIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--mongodb]" className={className} />;
}

export function MysqlWordmarkIcon({ className = '' }) {
  return <Icon iconClass="icon-[devicon--mysql-wordmark]" className={className} />;
}

export function PostmanIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--postman]" className={className} />;
}

export function PostgresqlIcon({ className = '' }) {
  return <Icon iconClass="icon-[devicon--postgresql]" className={className} />;
}

export function SwaggerIcon({ className = '' }) {
  return <Icon iconClass="icon-[devicon--swagger]" className={className} />;
}

export function VueIcon({ className = '' }) {
  return <Icon iconClass="icon-[logos--vue]" className={className} />;
}

export function AngularIcon({ className = '' }) {
  return <Icon iconClass="icon-[devicon--angularjs]" className={className} />;
}

export function NextJsIcon({ className = '' }) {
  return <Icon iconClass="icon-[vscode-icons--file-type-next]" className={className} />;
}

export function DockerIcon({ className = '' }) {
  return <Icon iconClass="icon-[vscode-icons--file-type-docker]" className={className} />;
}

export function NginxIcon({ className = '' }) {
  return <Icon iconClass="icon-[vscode-icons--file-type-nginx]" className={className} />;
}

export function OpenAiIcon({ className = '' }) {
  return <Icon iconClass="icon-[ph--open-ai-logo-thin]" className={className} />;
}

export function NestJsIcon({ className = '' }) {
  return <Icon iconClass="icon-[material-icon-theme--nest]" className={className} />;
}

export function VercelIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--vercel-light]" className={className} />;
}

export function CursorIcon({ className = '' }) {
  return <Icon iconClass="icon-[material-icon-theme--cursor]" className={className} />;
}

export function GitlabIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--gitlab-dark]" className={className} />;
}

export function GitIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--git]" className={className} />;
}

export function GithubLightIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--github-light]" className={className} />;
}

export function MaterialUiIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--materialui-light]" className={className} />;
}

export function ExpoIcon({ className = '' }) {
  return <Icon iconClass="icon-[vscode-icons--file-type-light-expo]" className={className} />;
}

export function DarkLogoIcon({ className = '' }) {
  return <Icon iconClass="icon-[glyphs--globe-stand-1-bold]" className={className} />;
}
export function LightLogoIcon({ className = '' }) {
  return <Icon iconClass="icon-[glyphs--globe-stand-1-outline]" className={className} />;
}

export function MicrosoftTeamsIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline-logos--microsoft-teams-logo-block]" className={className} />;
}

export function WhatsappIcon({ className = '' }) {
  return <Icon iconClass="icon-[uim--whatsapp]" className={className} />;
}

export function WhatsappColorIcon({ className = '' }) {
  return <Icon iconClass="icon-[logos--whatsapp-icon]" className={className} />;
}

export function PhoneColorIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline-ultimate-color--phone-circle]" className={className} />;
}

export function DataConfigurationIcon({ className = '' }) {
  return <Icon iconClass="icon-[flat-color-icons--data-configuration]" className={className} />;
}

export function WorkflowSquareIcon({ className = '' }) {
  return <Icon iconClass="icon-[hugeicons--workflow-square-01]" className={className} />;
}

export function InfinityDuotoneIcon({ className = '' }) {
  return <Icon iconClass="icon-[ph--infinity-duotone]" className={className} />;
}

export function WorkflowSquareTenIcon({ className = '' }) {
  return <Icon iconClass="icon-[hugeicons--workflow-square-10]" className={className} />;
}

export function ApiIcon({ className = '' }) {
  return <Icon iconClass="icon-[tabler--api]" className={className} />;
}

export function LayerGroupIcon({ className = '' }) {
  return <Icon iconClass="icon-[uim--layer-group]" className={className} />;
}

export function BugBoldDuotoneIcon({ className = '' }) {
  return <Icon iconClass="icon-[solar--bug-bold-duotone]" className={className} />;
}

export function FigmaDevIcon({ className = '' }) {
  return <Icon iconClass="icon-[devicon--figma]" className={className} />;
}

export function JiraLogoIcon({ className = '' }) {
  return <Icon iconClass="icon-[logos--jira]" className={className} />;
}

export function AndroidStudioIcon({ className = '' }) {
  return (
    <>
      <Icon iconClass="icon-[skill-icons--androidstudio-light]" className={`inline dark:hidden ${className}`.trim()} />
      <Icon iconClass="icon-[skill-icons--androidstudio-dark]" className={`hidden dark:inline ${className}`.trim()} />
    </>
  );
}

export function BashIcon({ className = '' }) {
  return (
    <>
      <Icon iconClass="icon-[skill-icons--bash-light]" className={`inline dark:hidden ${className}`.trim()} />
      <Icon iconClass="icon-[skill-icons--bash-dark]" className={`hidden dark:inline ${className}`.trim()} />
    </>
  );
}

// export function GithubActionsIcon({ className = '' }) {
//   return (
//     <>
//       <Icon iconClass="icon-[skill-icons--githubactions-light]" className={`inline dark:hidden ${className}`.trim()} />
//       <Icon iconClass="icon-[skill-icons--githubactions-dark]" className={`hidden dark:inline ${className}`.trim()} />
//     </>
//   );
// }

export function GithubActionsIcon({ className = '' }) {
  return <Icon iconClass="icon-[skill-icons--githubactions-light]" className={className} />;
  // return <Icon iconClass="icon-[skill-icons--githubactions-dark]" className={className} />;
}