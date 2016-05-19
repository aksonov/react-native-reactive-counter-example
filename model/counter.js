import Atom from 'kefir.atom';

export const counter = Atom(0).log("counter");

export function increase(){
  counter.modify(x=>x+1);
}

export function decrease(){
  counter.modify(x=>x-1);
}
