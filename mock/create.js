const getRandomNumber = (min,max) =>{
    const range = max - min + 1;
    return parseInt(Math.random() * range+min*10);
}

const createData = (index) =>{
    switch(getRandomNumber(0,2)){
        case 1 : {
            return {
                id : `samsung${index}`,
                code : 'samsung',
                name : '삼성전자',
                totalPrice : getRandomNumber(7000000,12000000),
                currentPrice : getRandomNumber(70000,120000),
                amount : getRandomNumber(1,30),
                dateTime : '2021-01-18 08:22:45'
            };
        }
        case 2 : {
            return {
                id : `ETH${index}`,
                code : 'ETH',
                name : '이더리움',
                totalPrice : getRandomNumber(1000000,42000000),
                currentPrice : getRandomNumber(400000,600000),
                amount : getRandomNumber(100,1000),
                dateTime : '2021-01-18 08:22:45'
            };
        }
        default : {
            return {
                id : `BTX${index}`,
                code : 'BTX',
                name : '비트코인',
                totalPrice : getRandomNumber(100000000,2420000000),
                currentPrice : getRandomNumber(1000000,4000000),
                amount : getRandomNumber(0,10),
                dateTime : '2021-01-18 08:22:45'
            };
        }
    }
}

module.exports = function(){
    return {
        transactions : Array(100).fill('').map((_,index)=>createData(index)),
        //100 크기의 배열을 ''로 초기화 하고 map의 함수를 통해 배열을 값을 채움
    }
}