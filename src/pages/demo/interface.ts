interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    name: number  ;     // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface Point {
   x: number;
   y?: number;
}

interface ClockConstructor {
    new (hour: number, minute: number)
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}