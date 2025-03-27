import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))
//await sleep(1000) 1초 동안 기다리는 함수