import * as logform from "logform";
import * as winston from "winston";

const { combine, timestamp, label, printf } = logform.format;

export const logger: winston.Logger = winston.createLogger({
  format: combine(
    label({ label: "Logging Infomation" }),
    timestamp(),
    printf(({ timestamp, label, level, message }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()]
});
