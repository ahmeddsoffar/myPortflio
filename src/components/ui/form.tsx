import * as React from "react";
import { cn } from "@/lib/utils";

export function Form({
  className,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>): React.ReactElement {
  return <form className={cn("space-y-4", className)} {...props} />;
}

export function FormField({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return <div className={cn("space-y-2", className)} {...props} />;
}

export function FormLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>): React.ReactElement {
  return (
    <label
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

export function FormDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.ReactElement {
  return (
    <p className={cn("text-xs text-muted-foreground", className)} {...props} />
  );
}

export function FormMessage({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): React.ReactElement {
  return <p className={cn("text-xs text-destructive", className)} {...props} />;
}
