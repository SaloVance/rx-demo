import { Observable, of, from, range, interval, timer, merge, fromEvent, ajax } from 'rxjs';
import { 
    map,
    tap,
    filter,
    flatMap,
    switchMap,
    combineLatest
} from 'rxjs/operators';

const print = (k) => {return v => console.log(k, v)};



const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
const combinedTimers = firstTimer.pipe(combineLatest(secondTimer));
combinedTimers.subscribe(print('test'));

