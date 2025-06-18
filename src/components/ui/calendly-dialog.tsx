import { ReactNode } from 'react';
import { InlineWidget } from 'react-calendly';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

interface CalendlyDialogProps {
  triggerText: ReactNode;
  dialogTitle?: string;
  height?: string | number;
}

export function CalendlyDialog({
  triggerText,
  dialogTitle = 'Schedule a Call',
  height = '630px',
}: CalendlyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="text-center">
          {triggerText}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 overflow-hidden rounded-lg">
          <InlineWidget
            url={'https://calendly.com/intelliduous'}
            styles={{ height }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
