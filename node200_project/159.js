const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

const tsFormat = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        timestamp: tsFormat,
        colorize: true,
        showlevel: true,
        level: 'debug',
      }),
      new winstonDaily({ //매일 새로운 파일에 로그를 기록하도록 설정
  
        level: 'info',
        filename: './node200_project/Log/logs',
        timestamp: tsFormat,
        datePattern: 'YYYY-MM-DD',
        showlevel: true,
        maxsize: 1000000, //로그 파일 크기가 10MB가 넘어가면 새로운 파일을 만듦
        maxFiles: 5, //최대 5개까지 가능
      }),
  
    ],
    exceptionHandlers: [
     new winstonDaily({
        level: 'info',
        filename: './node200_project/Log/exception',
        timestamp: tsFormat,
        datePattern: 'YYYY-MM-DD',
        showlevel: true,
        maxsize: 1000000,
        maxFiles: 5,
  
      }),
      new winston.transports.Console({
        timestamp: tsFormat,
        colorize: true,
        showlevel: true,
        level: 'debug',
      }),
    ],
  });
  
  logger.info('인포 로깅');
  logger.error('에러 로깅');



// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             timestamp: tsFormat, 
//             colorize: true, 
//             showlevel: true, 
//             level: 'debug',            
//         }),
//         new winstonDaily({
//             level:'info', 
//             filename: './node200_project/Log/test.log', 
//             timestamp: tsFormat,
//             datePattern: '_yyyy-MM-dd.log',
//             showlevel: true, 
//             maxSize: 1000000, 
//             maxFiles: 5,
//         }), 
//     ],
//     exceptionHandlers: [
//         winstonDaily({
//             level:'info',
//             filename:'./node200_project/Log/exception.log',
//             timestamp:tsFormat, 
//             datePattern: '_yyyy-MM-dd.log',
//             showlevel: true, 
//             maxSize: 1000000, 
//             maxFiles:5,

//         }),
//         winston.transports.Console({
//             timestamp: tsFormat, 
//             colorize: true, 
//             showlevel: true,
//             level: 'debug',
//         }),
//     ],
// }, (err)=> console.log(err));

// logger.info('인포 로깅');
// logger.error('에러 로깅');