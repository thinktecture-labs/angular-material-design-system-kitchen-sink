export interface CardAction {
  title: string;
  action: () => void | Promise<void>
}
