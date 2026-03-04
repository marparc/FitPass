import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-all",
        "placeholder:text-zinc-400",
        "hover:border-zinc-300",
        "focus:border-zinc-900 focus:ring-[3px] focus:ring-zinc-900/10",
        "disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-500 disabled:opacity-60",
        "aria-invalid:border-red-600 aria-invalid:ring-[3px] aria-invalid:ring-red-600/10",
        "file:mr-4 file:inline-flex file:h-7 file:items-center file:rounded-md file:border-0 file:bg-zinc-100 file:px-3 file:text-sm file:font-medium file:text-zinc-900 file:transition-colors hover:file:bg-zinc-200",
        className
      )}
      {...props}
    />
  );
}

export { Input };
