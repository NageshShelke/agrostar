import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS classes with clsx logic and resolves conflicts 
 * (e.g., 'px-2 px-4' becomes 'px-4')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}