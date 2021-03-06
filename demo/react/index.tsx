import * as React from "react";
import * as ReactDOM from "react-dom";
import { JSONEditor, Locale } from "../../dist/react";
import { schema, schemaSchema } from "../schema";
import * as dragula from "dragula";
import * as MarkdownIt from "markdown-it";
import * as hljs from "highlight.js";

let locale: Locale | null = null;

class Main extends React.Component<{}, {}> {
    private locale = locale;
    private schema = schema;
    private value: any = {};
    private isValid = false;
    private schemaSchema = schemaSchema;
    private get formattedSchema() {
        return JSON.stringify(this.schema, null, "  ");
    }
    render() {
        const valueHtml = hljs.highlight("json", JSON.stringify(this.value, null, "  ")).value;
        return (
            <div>
                <a href="https://github.com/plantain-00/schema-based-json-editor/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br/>
                <div style={{ float: "left", margin: "10px", width: "400px", overflowY: "scroll", height: "600px" }} className="bootstrap3-row-container">
                    <JSONEditor schema={this.schemaSchema}
                        initialValue={this.formattedSchema}
                        updateValue={this.updateSchema}
                        theme="bootstrap3"
                        icon="fontawesome4"
                        locale={this.locale}
                        dragula={dragula}
                        markdownit={MarkdownIt}
                        hljs={hljs}
                        forceHttps={false} />
                </div>
                <div style={{ width: "500px", margin: "10px", float: "left", overflowY: "scroll", height: "600px" }} className="bootstrap3-row-container">
                    <JSONEditor schema={this.schema}
                        initialValue={this.value}
                        updateValue={this.updateValue}
                        theme="bootstrap3"
                        icon="fontawesome4"
                        locale={this.locale}
                        dragula={dragula}
                        markdownit={MarkdownIt}
                        hljs={hljs}
                        forceHttps={false} />
                </div>
                <div style={{ float: "left", margin: "10px", width: "400px", overflowY: "scroll", height: "600px" }}>
                    Value:
                    <pre style={{ borderColor: this.isValid ? "black" : "red" }}><code dangerouslySetInnerHTML={{ __html: valueHtml }}></code></pre>
                </div>
            </div>
        );
    }
    private updateSchema = (value: any, isValid: boolean) => {
        try {
            this.schema = JSON.parse(value);
            this.setState({ schema: this.schema });
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    }
    private updateValue = (value: any, isValid: boolean) => {
        this.value = value;
        this.isValid = isValid;
        this.setState({ value: this.value });
    }
}

function start() {
    ReactDOM.render(<Main />, document.getElementById("container"));
}

if (navigator.language === "zh-CN") {
    import ("../../dist/locales/" + navigator.language + ".js").then(module => {
        locale = module.locale;
        start();
    }, error => {
        start();
    });
} else {
    start();
}
