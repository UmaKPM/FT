import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BufferingService } from '../buffering.service';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html' ,
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent  {
  @ViewChild('scrollMe')
  // d1!: ElementRef;

  // userInput!: any;

  // message!: any;


  // generateMessage()  {

  //   if (this.userInput === 'Hi') {

  //     const pageLink = '';

  //     this.message = "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:  Hello";

  //   } else if (this.userInput === "thank you") {

  //     const pageLink = '';

  //     this.message = `You selected option 2. Click <a href="${pageLink}">here</a> to go to page 2.`;

  //   } else {

  //     this.message = 'Invalid selection.';

  //   }

  // }



  private myScrollContainer!: ElementRef;


  messages: { text: any; isUser: boolean }[] = [];
  updatedtext:any;
  loading: boolean = false;
  ngOnInit() {

    this.scrollToBottom();

}



ngAfterViewChecked() {

    this.scrollToBottom();

}
// ngAfterViewInit() {
//   d1.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
// }


scrollToBottom(): void {

    try {

        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;

    } catch(err) { }

}



  handleMessage(message: any): void {

    this.messages.push({ text: message, isUser: true });

    this.loading = true;



    setTimeout(() => {

      this.loading = false;

     const link ='/http://localhost:4200/'

      if (message === 'Hi') {

        this.messages.push({ text: '𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:  Hello', isUser: false });

      } else if (message  === 'how are you?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:  I'm fine", isUser: false });

      }
      else if (message  === 'hi') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:  Hello", isUser: false });

      }
      else if (message  === 'bye') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:  Bye. Have a Great Day", isUser: false });

      }
      else if (message  === 'thank you') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:  You are Welcome ", isUser: false });

      }

       else if (message  === 'Let me know the details about the Client John?') {
      /*const pgeLink='/http://localhost:4200/'*/
        this.messages.push({ text:  "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞: Click the Link for Details <a href=>"+"http://localhost:4200"+"</a>", isUser: false });
       }


      else if (message  === 'Hey , What has changed from Secure Act 2019 to Secure Act 2.0?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞: Secure Act 2.0 introduces a new category of catch-up contributions for workers aged 60 to 63. Starting in 2025, there will be a new catch-up contribution limit for these older workers: the greater of $10,000 or 150% of the standard catch-up contribution limit. These limits will regularly increase with inflation.", isUser: false });

      }

      else if (message  === 'Hey , What is the difference between Retirement Choice Plus and Retirement Choice?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:The Retirement Choice contract gives you the ability to withdraw your money more quickly from TIAA Traditional. Additionally, the Retirement Choice/Retirement Choice Plus annuity contracts have a minimum rate guarantee of between 1% and 3% that is determined annually.", isUser: false });

      }


      else if (message  === 'Hey , What changes are being made to catch-up requirements?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:Beginning in 2024, SECURE 2.0 provides that the IRA catch-up limit will be indexed annually.", isUser: false });

      }



      else if (message  === 'Hey , Can employers get a tax benefit for starting a retirement program for their employees?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:Eligible for tax deduction on the amount contributed as employer's contribution towards the NPS account of employees, up to 10% of the salary (Basic + DA) of employer's contribution as 'Business Expense", isUser: false });

      }

      else if (message  === 'Hey , What are the most salient features of Secure Act 2.0 in one sentence?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:Provisions include automatic 401(k) enrollment, an increase in the age for taking RMDs, significant tax benefits for employers, and much more.", isUser: false });

      }

      else if (message  === 'Hey ,What is the 7 percent rule for retirement?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:The Ultimate Guide To The 7 Percent Rule Retirement (2023) The 7 percent rule is a retirement planning guideline that suggests you can comfortably withdraw 7 percent of your retirement savings annually without running out of money", isUser: false });

      }

      else if (message  === 'Hey , How does Secure Act 2.0 change with my demographics?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:Effective immediately, the starting age for Required Minimum Distributions (RMDs) is pushed back from age 72 to 73 for people born between 1951-1959, and to age 75 for people born in 1960 or later. Planning Note: Those turning 72 this year (born in 1951) will get a year of reprieve from taking RMDs.", isUser: false });

      }

      else if (message  === 'Hey , Will I have to start taking RMD if I turn 72 in 2023?') {

        this.messages.push({ text: "𝐅𝐮𝐭𝐮𝐫𝐞 𝐓𝐞𝐧𝐬𝐞:Beginning in 2023, the SECURE 2.0 Act raised the age that you must begin taking RMDs to age 73. If you reach age 72 in 2023, the required beginning date for your first RMD is April 1, 2025, for 2024.", isUser: false });

      }



      else {

        this.messages.push({ text: "Sorry, I don't understand", isUser: false });

      }

    }, 3000);

  }



   }





