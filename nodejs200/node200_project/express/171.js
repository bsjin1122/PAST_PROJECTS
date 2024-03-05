// 171 node-schedule 
const schedule = require('node-schedule');

//특정 시간에 한 번 
//2022년 6월 27일 오후 9시 30분에 수행할 작업
const date = new Date(2022, 5, 27, 21, 11, 0);

//2022-06-27
console.log(date);

const j = schedule.scheduleJob(date, ()=> {
    console.log('no pain, no gain');
});

// 매 시간마다 한 번 
const rule = new schedule.RecurrenceRule();
rule.minute = 32; // 매 시간 17분마다 

const k = schedule.scheduleJob(rule, ()=> {
    console.log('Laziness is nothing more than the habit of resting before you get tired.');
});

// 작업 취소 
// j.cancel();
// k.cancel();


/*만약 어떤 schedule job이 script가 실행되지 않을 때도 
지속되어야 한다면 node-cron 모듈을 사용하는 것을 고려하는 것이 좋다.*/