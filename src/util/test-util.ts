import { LoggerApi } from "../logger";

export class MockLogger extends LoggerApi {
  static mockErrorLogger = jest.fn();
  static mockInfoLogger = jest.fn();
  static mockDebugLogger = jest.fn();
  static mockWarnLogger = jest.fn();
  static mockTraceLogger = jest.fn();

  child = jest.fn().mockReturnValue({
    info: MockLogger.mockInfoLogger,
    error: MockLogger.mockErrorLogger,
    debug: MockLogger.mockDebugLogger,
    warn: MockLogger.mockWarnLogger,
    log: () => {},
    trace: MockLogger.mockTraceLogger,
    apply: () => {},
    fatal: () => {},
  });

  fatal = jest.fn();
  error = MockLogger.mockErrorLogger;
  info = MockLogger.mockInfoLogger;
  debug = MockLogger.mockDebugLogger;
  warn = MockLogger.mockWarnLogger;
  log = jest.fn();
  trace = MockLogger.mockTraceLogger;
  apply = jest.fn();
}
