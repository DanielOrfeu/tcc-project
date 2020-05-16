import { Component, OnInit } from '@angular/core';
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
      if(isConnected){
        this.showForm = false;
        this.showRetryMessage = false;
        this.showLoading = true;
        this.spinner.show();
        setTimeout(() => {
          this.showLoading = false;
          this.showForm = true
          this.spinner.hide();
        }, 5500);
      } else {
        this.showForm = false;
        this.showRetryMessage = true;
        this.showLoading = false;
      }
    })
  }

  ngOnInit(): void {
  }

}
