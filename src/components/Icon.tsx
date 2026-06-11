import {
  GraduationCap,
  HeartPulse,
  Briefcase,
  Leaf,
  Scale,
  Trophy,
  Cpu,
  Wheat,
  ShieldCheck,
  Radio,
  Building2,
  Palette,
  Users,
  Network,
  Eye,
  Shuffle,
  Repeat,
  Sprout,
  Landmark,
  Gavel,
  ListChecks,
  HeartHandshake,
  TrendingUp,
  Crown,
  Vote,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  GraduationCap,
  HeartPulse,
  Briefcase,
  Leaf,
  Scale,
  Trophy,
  Cpu,
  Wheat,
  ShieldCheck,
  Radio,
  Building2,
  Palette,
  Users,
  Network,
  Eye,
  Shuffle,
  Repeat,
  Sprout,
  Landmark,
  Gavel,
  ListChecks,
  HeartHandshake,
  TrendingUp,
  Crown,
  Vote,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Cmp = map[name] ?? Scale;
  return <Cmp className={className} aria-hidden="true" />;
}
