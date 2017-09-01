import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {Renderer} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('slideInOut', [
          state('in', style({
            transform: 'translate3d(0, 0, 0)'
          })),
          state('out', style({
            transform: 'translate3d(100%, 0, 0)'
          })),
          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
        ]),
      ]
})
export class HeaderComponent implements OnInit {
    name;
    menuStatus = 0;

    constructor(private translate: TranslateService, public router: Router, public render: Renderer) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });

        this.name=localStorage.getItem("lastname");

        console.log("11 "+localStorage.getItem("lastname"));

    }


    menuState:string = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }


    private menuItemsArray: any[] = [ 
           {"title":"Electricity","link":"#"},
           {"title":"Mobile Bill","link":"#"},
           {"title":"Home and Kitchen","link":"#",
           "subItems":[
                       {"title":"Furniture","link":"#"},
                       {"title":"Cookware","link":"#"},
                      ]
           },
           {"title":"Car and Bike Accessories","link":"#",
            "subItems":[
                         {"title":"Tyres and Alloys","link":"#"},
                         {"title":"Comfort and Safety","link":"#"},
                        ]
           },
     ];

      public onMenuClose(){
        console.log("menu closed");
      }
      public onMenuOpen(){
        console.log("menu Opened");
      }
      private onItemSelect(item:any){
        console.log(item);
      }

    public loadScript() {
      let node = document.createElement('script');
      node.src = '../../../../assets/js/classie.js';
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);

      let js = document.createElement('script');
      node.src = '../../../../assets/js/menu_main.js';
      js.type = 'text/javascript';
      js.async = true;
      js.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(js);
    }

    ngOnInit() {
        this.loadScript()
    }

    get user(): any {
        return localStorage.getItem('name');
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    openMenu(event){
        if (this.menuStatus == 0) {
            this.render.setElementClass(event.target,"active",false);

            console.log("open menu ?");
            this.menuStatus = 1
        }else{
            console.log("close menu ?");
            this.menuStatus = 0
        }
    }
}
