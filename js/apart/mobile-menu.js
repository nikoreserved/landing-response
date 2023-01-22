/*
    hidden menu for mobile device
    v 1.0
*/
'use strict'


export const menuMobile = document.querySelector('.menu__mobile');
if(menuMobile) {
    const menuBody = document.querySelector('.menu__body');
    menuMobile.addEventListener('click', function (e) {
        document.body.classList.toggle('_lockMenu');
        menuMobile.classList.toggle('_activeMenuMobile');
        menuBody.classList.toggle('_activeMenuMobile');
        })
    }


    export function opacityMenu() {

    document.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 1) {
          document.documentElement.style.setProperty('--opacity', 1);
        } else {
          document.documentElement.style.setProperty('--opacity', 0);
        }
      });
    }