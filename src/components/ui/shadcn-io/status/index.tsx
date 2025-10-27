import type { ComponentProps, HTMLAttributes } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type StatusProps = ComponentProps<typeof Badge> & {
  status: 'public' | 'private';
};

export const Status = ({ className, status, ...props }: StatusProps) => (
  <Badge
    className={cn('flex items-center gap-2', 'group', status, className)}
    variant="secondary"
    {...props}
  />
);

export type StatusIndicatorProps = HTMLAttributes<HTMLSpanElement>;

export const StatusIndicator = ({
  className,
  ...props
}: StatusIndicatorProps) => (
  <span className="relative flex h-2 w-2" {...props}>
    <span
      className={cn(
        // 'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
        'absolute inline-flex h-full w-full rounded-full opacity-75',
        'group-[.public]:bg-emerald-500',
        'group-[.private]:bg-red-500',
      className)}
    />
    <span
      className={cn(
        'relative inline-flex h-2 w-2 rounded-full',
        'group-[.public]:bg-emerald-500',
        'group-[.private]:bg-red-500',
      )}
    />
  </span>
);

export type StatusLabelProps = HTMLAttributes<HTMLSpanElement>;

export const StatusLabel = ({
  className,
  children,
  ...props
}: StatusLabelProps) => (
  <span className={cn('text-muted-foreground', className)} {...props}>
    {children ?? (
      <>
        <span className="hidden group-[.public]:block">Public</span>
        <span className="hidden group-[.private]:block">Private</span>
      </>
    )}
  </span>
);
