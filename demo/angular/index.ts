import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "tslib";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

enableProdMode();

import { schema, schemaSchema } from "../schema";

import * as dragula from "dragula";
import * as MarkdownIt from "markdown-it";
import * as hljs from "highlight.js";

let locale: Locale | null = null;

@Component({
    selector: "app",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div>
        <a href="https://github.com/plantain-00/schema-based-json-editor/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <div style="width: 400px; margin: 10px; float: left; overflow-y: scroll; height: 600px" class="bootstrap3-row-container">
            <json-editor [schema]="schemaSchema"
                [initialValue]="formattedSchema"
                (updateValue)="updateSchema($event)"
                theme="bootstrap3"
                icon="fontawesome4"
                [locale]="locale"
                [dragula]="dragula"
                [markdownit]="markdownit"
                [hljs]="hljs"
                [forceHttps]="false">
            </json-editor>
        </div>
        <div style="width: 500px; margin: 10px; float: left; overflow-y: scroll; height: 600px" class="bootstrap3-row-container">
            <json-editor [schema]="schema"
                [initialValue]="value"
                (updateValue)="updateValue($event)"
                theme="bootstrap3"
                icon="fontawesome4"
                [locale]="locale"
                [dragula]="dragula"
                [markdownit]="markdownit"
                [hljs]="hljs"
                [forceHttps]="false">
            </json-editor>
        </div>
        <div style="width: 400px; margin: 10px; float: left; overflow-y: scroll; height: 600px">
            Value:
            <pre [style.borderColor]="color"><code [innerHTML]="valueHtml"></code></pre>
        </div>
    </div>
    `,
})
class MainComponent {
    locale = locale;
    schema = schema;
    value: any = {};
    color = "black";
    dragula = dragula;
    markdownit = MarkdownIt;
    hljs = hljs;
    schemaSchema = schemaSchema;
    get formattedSchema() {
        return JSON.stringify(this.schema, null, "  ");
    }
    updateSchema({ value }: ValidityValue<ValueType>) {
        try {
            this.schema = JSON.parse(value as string);
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    }
    get valueHtml() {
        return hljs.highlight("json", JSON.stringify(this.value, null, "  ")).value;
    }
    updateValue({ value, isValid }: ValidityValue<ValueType>) {
        this.value = value;
        this.color = isValid ? "black" : "red";
    }
}

import { NgModule, Component, ChangeDetectionStrategy, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { JSONEditorModule, ValidityValue, ValueType, Locale } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, JSONEditorModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

function start() {
    platformBrowserDynamic().bootstrapModule(MainModule);
}

if (navigator.language === "zh-CN") {
    import("../../dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
