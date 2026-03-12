import {
  Zap,
  Monitor,
  Shield,
  Activity,
  Database,
  Terminal,
  Bell,
  Clock,
  GitBranch,
  Layers,
  Copy,
  FileText,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  monitor: Monitor,
  shield: Shield,
  activity: Activity,
  database: Database,
  terminal: Terminal,
  bell: Bell,
  clock: Clock,
  "git-branch": GitBranch,
  layers: Layers,
  copy: Copy,
  "file-text": FileText,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = "" }: IconProps) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
}
