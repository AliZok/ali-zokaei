import { useNotificationStore } from '@/store/notificationStore';

const notificationActions = {
  show: useNotificationStore.getState().showNotification,
  close: useNotificationStore.getState().closeNotification,
};

export const notify = {
  success: (message: string, duration: number) => notificationActions.show(message, 'success',duration),
  error: (message: string, duration: number) => notificationActions.show(message, 'error',duration),
  warning: (message: string, duration: number) => notificationActions.show(message, 'warning',duration),
  info: (message: string, duration: number) => notificationActions.show(message, 'info',duration),
};

// Optional: Export types for consumers
export type NotifyFunction = (message: string) => void;
export interface NotifyAPI {
  success: NotifyFunction;
  error: NotifyFunction;
  warning: NotifyFunction;
  info: NotifyFunction;
}