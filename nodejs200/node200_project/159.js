const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
// const moment = require('moment');
const { format } = require('logform');
const { combine, timestamp, json, colorize, label, prettyPrint, simple, printf, align } = format;

// Define log format
const logFormat = printf(({level, message, label, timestamp})=>{
  return `${timestamp} [${label}] ${level}: ${message}`; 
});

const jsonWithTimestamp = combine(
  json(),
  colorize({all:true}),
  label({label: 'label test!!'}),
  simple(),
  timestamp({ format: ' YYYY-MM-DD HH:MM:SS ||' }),
  align(),
  prettyPrint(),
  logFormat
);


const logger = winston.createLogger({
  transports: [
      new winston.transports.Console({
        colorize: true,
        showlevel: true,
        level: 'debug',
        handleExceptions: true,
        zippedArchive: true,
        format: jsonWithTimestamp,
        prettyPrint: true

      }),
      new winstonDaily({ //매일 새로운 파일에 로그를 기록하도록 설정
        level: 'info',
        filename: './node200_project/Log/logs',
        datePattern: 'YYYY-MM-DD-HH',
        showlevel: true,
        maxsize: 1000000, //로그 파일 크기가 10MB가 넘어가면 새로운 파일을 만듦
        maxFiles: 5, //최대 5개까지 가능
        zippedArchive: true,
        format: jsonWithTimestamp, 
      }),
  
    ],
    exceptionHandlers: [
     new winstonDaily({
        level: 'info',
        filename: './node200_project/Log/exception',
        datePattern: 'YYYY-MM-DD-HH',
        showlevel: true,
        maxsize: 1000000,
        maxFiles: 5,
        zippedArchive: true,
        format: jsonWithTimestamp,
      
      }),
      new winston.transports.Console({
        colorize: true,
        showlevel: true,
        level: 'debug',
        handleExceptions: true,
        zippedArchive: true,
        format: jsonWithTimestamp,
      }),
    ],
  });

module.exports = logger;
  
logger.info('인포 로깅');
logger.error('에러 로깅');