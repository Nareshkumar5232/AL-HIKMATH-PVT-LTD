import { toast as sonnerToast } from 'sonner';

type ToastOptions =
  | string
  | {
      title?: string;
      description?: string;
      action?: React.ReactNode;
      type?: 'success' | 'info' | 'error' | 'warning';
    };

export function useToast() {
  function toast(opts: ToastOptions) {
    if (typeof opts === 'string') {
      sonnerToast(opts);
      return;
    }

    const message = opts.title ? `${opts.title}${opts.description ? ` — ${opts.description}` : ''}` : opts.description ?? '';

    switch (opts.type) {
      case 'success':
        sonnerToast.success(message);
        break;
      case 'error':
        sonnerToast.error(message);
        break;
      case 'warning':
        // sonner doesn't expose `warn` consistently; use default toast
        sonnerToast(message);
        break;
      default:
        sonnerToast(message);
    }
  }

  return { toast };
}
