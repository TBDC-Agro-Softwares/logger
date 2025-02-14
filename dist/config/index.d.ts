export type LogLevelTypes = 'debug' | 'warning' | 'error';
export type TbdcLoggerConfig = {
    logLevel: LogLevelTypes;
};
export declare function configureTbdcLogger(options: Partial<TbdcLoggerConfig>): void;
export declare function getConfig(): TbdcLoggerConfig;
