import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: ToastrService) {}

  success(message: string = 'success'): void {
    this.toast.success(message);
  }
  error(message: string = 'error'): void {
    this.toast.error(message);
  }
}
