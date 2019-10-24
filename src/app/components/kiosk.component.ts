import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import _ from 'lodash';
/**
 * @see Lodash_Components
 */
@
  Component({
    selector: 'app-kiosk',
    templateUrl: './kiosk.component.html',
    styleUrls: ['./kiosk.component.css']
  })
export class KioskComponent implements OnInit {
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  public isVisible: boolean = false;
  Popuptensecond(): void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 10000)
  }
  fGroup: FormGroup;
  lists: any = null;
  isNewUser: boolean = false;
  isMember: boolean = false;
  result = [];
  constructor(private fb: FormBuilder, private router: Router, private service: ServiceService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.fGroup = this.fb.group({
      search: [null, [Validators.required, Validators.pattern(/[a-zA-Z0-9-]$/)]]
    })
  }
  onSubmit(value) {
    var ar;
    this.service.queryTest().subscribe((res: any) => {
      _.find(res.appiontment, function (o) {
        ar = o;
        return o.id == value.search;
      });
      if (ar.id >= ar.id) {
        this.lists = ar;
        this.isNewUser = false;
        this.isMember = true;
      } else if (ar.id! < ar.id) {
        this.lists = ar;
        this.isMember = false;
        this.isNewUser = true;
      } else {
        this.isMember = false;
        this.isNewUser = true;
      }
    })
  }
  queueBill(data) {
    this.router.navigate(['user', data.id]);
  }
  toUser() {
    this.router.navigate(['user']);
  }
}
