import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FuelUiModule} from "../fuel-ui";

import {FormatDemo} from "./format/format.demo";
import {MapToIterableDemo} from "./mapToIterable/mapToIterable.demo";
import {OrderByDemo} from "./orderBy/orderBy.demo";
import {RangeDemo} from "./range/range.demo";

export * from "./format/format.demo";
export * from "./mapToIterable/mapToIterable.demo";
export * from "./orderBy/orderBy.demo";
export * from "./range/range.demo";

const demoDirectives = [
    FormatDemo,
    MapToIterableDemo,
    OrderByDemo,
    RangeDemo
]

@NgModule({
    imports: [CommonModule,FormsModule,FuelUiModule],
    declarations: demoDirectives,
    exports: demoDirectives
})
export class FuiPipesDemoModule { }