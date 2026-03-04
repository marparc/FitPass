"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 cursor-pointer shrink-0 items-center justify-center rounded border border-zinc-200 bg-white transition-colors outline-none",
        "hover:border-zinc-300",
        "focus-visible:border-zinc-900 focus-visible:ring-[3px] focus-visible:ring-zinc-900/10",
        "data-[state=checked]:border-zinc-900 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-600 aria-invalid:ring-[3px] aria-invalid:ring-red-600/10",
        "aria-invalid:data-[state=checked]:border-red-600 aria-invalid:data-[state=checked]:bg-red-600",
        "group-has-disabled/field:opacity-50",
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
