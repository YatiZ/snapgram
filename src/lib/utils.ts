import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeAgo(dateString: string): string {
  const currentDate = new Date();
  const targetDate = new Date(dateString);
  
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (daysDifference > 0) {
    return daysDifference === 1
      ? '1 day ago'
      : `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    return hoursDifference === 1
      ? '1 hour ago'
      : `${hoursDifference} hours ago`;
  } else if (minutesDifference > 0) {
    return minutesDifference === 1
      ? '1 minute ago'
      : `${minutesDifference} minutes ago`;
  } else {
    return secondsDifference <= 1
      ? 'Just now'
      : `${secondsDifference} seconds ago`;
  }
}

export const checkIsLiked = (likeList: string[],userId: string) =>{
  return likeList.includes(userId)
}