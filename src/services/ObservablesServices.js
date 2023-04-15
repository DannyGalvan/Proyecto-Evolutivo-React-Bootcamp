import { Observable } from 'rxjs';

export const getNumbers = new Observable((subscriber) => {
  //emite valores
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000); //termina luego de un segundo
});

export const multiplePromise = () => {
  const w = Promise.all([fetch("/api/posts"), fetch("/api/photos")])
    .then(([posts, photos]) => Promise.all([posts.json(), photos.json()]))
    .then((response) => response)
    .catch((error) => console.log(error));
  
  w.then(x => console.log(x))
};