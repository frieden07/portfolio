import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactForm {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private SERVICE_ID  = '';
  private TEMPLATE_ID = '';
  private PUBLIC_KEY  = '';

  async send(form: ContactForm): Promise<void> {
    await emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      { ...form, to_email: 'tiwarishivanshu535@gmail.com' },
      { publicKey: this.PUBLIC_KEY }
    );
  }
}
