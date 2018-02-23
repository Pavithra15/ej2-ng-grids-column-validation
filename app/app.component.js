"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = data_1.orderDatas;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true };
        this.customeridrules = { maxLength: 7 };
        this.freightrules = { required: true };
        this.editparams = { params: { popupHeight: '300px' } };
        this.pageSettings = { pageCount: 5 };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: " <ejs-grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>\n        <e-columns>\n            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' [validationRules]='orderidrules'></e-column>\n            <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customeridrules'></e-column>\n            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' [validationRules]='freightrules'></e-column>\n            <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>\n            <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>\n        </e-columns>\n    </ejs-grid>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
