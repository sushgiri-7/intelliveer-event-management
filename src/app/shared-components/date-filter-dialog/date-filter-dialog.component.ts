import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-date-filter-dialog',
  templateUrl: './date-filter-dialog.component.html',
  styleUrls: ['./date-filter-dialog.component.scss'],
})
export class DateFilterDialogComponent {
  selectedDate: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<DateFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDateChange(event: any) {
    this.selectedDate = event.value;
  }

  clearDateFilter() {
    this.selectedDate = null;
  }

  applyFilter() {
    this.dialogRef.close(this.selectedDate); // Pass selected date back
  }

  closeDialog() {
    this.dialogRef.close(); // Close without changes
  }
}
