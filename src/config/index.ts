import { merge } from './helpers';

export type LogLevelTypes = 'debug' | 'warning' | 'error';

export type TbdcLoggerConfig = {
  logLevel: LogLevelTypes;
};

let config: TbdcLoggerConfig = {
  logLevel: 'debug',
};

export function configureTbdcLogger(options: Partial<TbdcLoggerConfig>): void {
  config = merge<TbdcLoggerConfig>(config, options);
}

export function getConfig(): TbdcLoggerConfig {
  return config;
}
