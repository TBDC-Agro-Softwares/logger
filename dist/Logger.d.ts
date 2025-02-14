export default abstract class Logger {
    static log(message: string): void;
    static debug(title: string, message: string): void;
    static info(message: string): void;
    static warn(message: string): void;
    static error(message: string | undefined): void;
    static criticalError(origin: string, message: string | undefined): void;
    static applicationError<T extends Error>(errorClass: T): void;
    static success(title: string, message: string): void;
    static systemStarted(serverPort?: string): void;
    static httpDebugStart(method: string, route: string): void;
    static httpDebugEnd(method: string, route: string, status: number, responseTime: number): void;
}
