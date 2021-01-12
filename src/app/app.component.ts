
import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "ag-grid-community";
import * as jquery from 'jquery';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private components;
  private rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete"
      },
      {
        headerName: "Date",
        field: "date",
        editable: true,
        cellEditor: "datePicker"
      },
      {
        headerName: "Age",
        field: "age"
      },
      {
        headerName: "Country",
        field: "country"
      },
      {
        headerName: "Year",
        field: "year"
      },
      {
        headerName: "Sport",
        field: "sport"
      },
      {
        headerName: "Gold",
        field: "gold"
      },
      {
        headerName: "Silver",
        field: "silver"
      },
      {
        headerName: "Bronze",
        field: "bronze"
      },
      {
        headerName: "Total",
        field: "total"
      }
    ];
    this.components = { datePicker: getDatePicker() };
  }

   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}

function getDatePicker() {
  function Datepicker() {}
  Datepicker.prototype.init = function(params) {
    this.eInput = document.createElement("input");
    this.eInput.value = params.value;
    $(this.eInput).datepicker({ dateFormat: "dd/mm/yy" });
  };
  Datepicker.prototype.getGui = function() {
    return this.eInput;
  };
  Datepicker.prototype.afterGuiAttached = function() {
    this.eInput.focus();
    this.eInput.select();
  };
  Datepicker.prototype.getValue = function() {
    return this.eInput.value;
  };
  Datepicker.prototype.destroy = function() {};
  Datepicker.prototype.isPopup = function() {
    return false;
  };
  return Datepicker;
}

