import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  showForm: boolean = true;
  showLoading: boolean = false;
  showRetryMessage: boolean = false;

  constructor(
    private connectionService: ConnectionService,
    private spinner: NgxSpinnerService
  ) {
    this.connectionService.monitor().subscribe(isConnected => {
      if (isConnected) {
        this.loadingMode(5500)
      } else {
        this.loadingMode(1000)
      }
    })
  }

  loadingMode(ms: number) {
    this.showForm = false;
    this.showRetryMessage = false;
    this.showLoading = true;
    this.spinner.show();
    setTimeout(() => {
      if (window.navigator.onLine) {
        this.showForm = true
      } else {
        this.showRetryMessage = true;
      }
      this.showLoading = false;
      this.spinner.hide();
    }, ms);
  }

  ngOnInit(): void {
    this.loadingMode(1500)
  }
}
