type MessageVariant = 'success' | 'alerts' | 'error' | 'tips';

interface AppAlert {
  key: number;
  message: string;
  variant: MessageVariant;
}
