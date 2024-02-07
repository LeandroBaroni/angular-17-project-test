import { animate, state, style, transition, trigger } from '@angular/animations';

export const sideBarOpenClose = trigger('openClose', [
  state(
    'open',
    style({
      position: '{{position}}'
    }),
    {
      params: {
        position: window.innerWidth > 768 ? 'relative' : 'fixed'
      }
    }
  ),
  transition('* => closed', [animate('.6s')])
]);
