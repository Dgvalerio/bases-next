/* eslint-disable no-console */
interface ConsoleTron {
  type?: 'log' | 'error' | 'warn';
  content: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const consoleTron = ({ type = 'log', content }: ConsoleTron): void => {
  if (console.tron) {
    if (type === 'error') {
      console.tron.error(content);
    } else if (type === 'warn') {
      console.tron.warn(content);
    } else {
      console.tron.log(content);
    }
  }
};
