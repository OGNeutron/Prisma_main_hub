import { Response } from "express";
import { Promise } from "bluebird";
import { logger } from "./logger";

export const respond = (
  res: Response,
  status: number,
  boolean: boolean,
  data: Object | null
) => {
  return res.status(status).json({
    success: boolean,
    result: data
  });
};

export const normalisePort = (port: number | string): number => {
  if (typeof port === "string") {
    return parseInt(port);
  } else {
    return port;
  }
};

export const consolePrint = (data: Array<string> | string): any => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(data)) {
      return data.forEach(d => {
        resolve(logger.log({ level: "info", message: d }));
      });
    } else if (typeof data === "string") {
      return resolve(logger.log({ level: "info", message: data }));
    } else {
      return reject(`Arguments need to be a string or an array of strings`);
    }
  });
};

export const sluggify = (title: string): string => {
  return title.replace(/ /g, "-").toLowerCase();
};
