import './styles/app.scss';
import { Observable } from 'rxjs';
import { appService } from './services/service'

const body = document.querySelector('body');
const h1 = document.createElement('h1');

body.appendChild(h1);

const counter = new Observable((subscriber: any) => {
    let count = 0;
    subscriber.next(count++);
    subscriber.next(count++);
    subscriber.next(count++);
    setInterval(() => {
      subscriber.next(count++);
      if (count > 10) {
          subscriber.complete();
      }
    }, 1000);
})

counter.subscribe((data: any) => {
    console.log(data);
    h1.innerText = `Count: ${ data }`;
});

appService.getUser(1).then((user: any) => {
    console.log(user);
});