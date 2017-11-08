/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
export declare const vueArrayEditorTemplateHtml = "<div :class=\"errorMessage ? theme.errorRow : theme.row\"><h3>{{titleToShow}}<div :class=\"theme.buttonGroup\" :style=\"buttonGroupStyleString\"><optional :required=\"required\" :value=\"value\" :isReadOnly=\"isReadOnly\" :theme=\"theme\" :locale=\"locale\" @toggleOptional=\"toggleOptional()\"></optional><icon v-if=\"true\" @click=\"collapseOrExpand()\" :text=\"collapsed ? icon.expand : icon.collapse\" :theme=\"theme\" :icon=\"icon\"></icon><icon v-if=\"hasAddButton\" @click=\"addItem()\" :text=\"icon.add\" :theme=\"theme\" :icon=\"icon\"></icon><icon v-if=\"hasDeleteButtonFunction\" @click=\"$emit('delete')\" :text=\"icon.delete\" :theme=\"theme\" :icon=\"icon\"></icon></div></h3><description :theme=\"theme\" :message=\"schema.description\" :notEmpty=\"true\"></description><div :class=\"theme.rowContainer\"><div v-if=\"showFilter\" :class=\"theme.row\"><input :class=\"theme.formControl\" @change=\"onFilterChange($event)\" @keyup=\"onFilterChange($event)\" :value=\"filter\"></div><div v-for=\"item in filteredValues\" :key=\"(1 + item.i) * renderSwitch\" :data-index=\"item.i\" :class=\"theme.rowContainer\"><editor :schema=\"schema.items\" :title=\"item.i\" :initial-value=\"value[item.i]\" @update-value=\"onChange(item.i, $event)\" :theme=\"theme\" :icon=\"icon\" :locale=\"locale\" :required=\"true\" :readonly=\"isReadOnly\" @delete=\"onDeleteFunction(item.i)\" :has-delete-button=\"true\" :dragula=\"dragula\" :md=\"md\" :hljs=\"hljs\" :force-https=\"forceHttps\"></editor></div></div><description :theme=\"theme\" :message=\"errorMessage\"></description></div>";
export declare const vueBooleanEditorTemplateHtml = "<div :class=\"theme.row\"><label :class=\"theme.label\">{{titleToShow}}<div :class=\"theme.buttonGroup\" :style=\"buttonGroupStyle\"><optional :required=\"required\" :value=\"value\" :isReadOnly=\"isReadOnly\" :theme=\"theme\" :locale=\"locale\" @toggleOptional=\"toggleOptional()\"></optional><icon v-if=\"hasDeleteButtonFunction\" @click=\"$emit('delete')\" :text=\"icon.delete\" :theme=\"theme\" :icon=\"icon\"></icon></div></label><div v-if=\"value !== undefined\"><div :class=\"theme.radiobox\"><label><input type=\"radio\" @change=\"onChange($event)\" :checked=\"value\" :disabled=\"isReadOnly\"> {{locale.info.true}}</label></div><div :class=\"theme.radiobox\"><label><input type=\"radio\" @change=\"onChange($event)\" :checked=\"!value\" :disabled=\"isReadOnly\"> {{locale.info.false}}</label></div></div><description :theme=\"theme\" :message=\"schema.description\"></description></div>";
export declare const vueEditorTemplateHtml = "<object-editor v-if=\"schema.type === 'object'\" :schema=\"schema\" :initial-value=\"initialValue\" :title=\"title\" :theme=\"theme\" :locale=\"locale\" :icon=\"icon\" :readonly=\"readonly\" :required=\"required\" @update-value=\"$emit('update-value', $event)\" @delete=\"$emit('delete')\" :has-delete-button=\"hasDeleteButton\" :dragula=\"dragula\" :md=\"md\" :hljs=\"hljs\" :forceHttps=\"forceHttps\"></object-editor><array-editor v-else-if=\"schema.type === 'array'\" :schema=\"schema\" :initial-value=\"initialValue\" :title=\"title\" :theme=\"theme\" :locale=\"locale\" :icon=\"icon\" :readonly=\"readonly\" :required=\"required\" @update-value=\"$emit('update-value', $event)\" @delete=\"$emit('delete')\" :has-delete-button=\"hasDeleteButton\" :dragula=\"dragula\" :md=\"md\" :hljs=\"hljs\" :forceHttps=\"forceHttps\"></array-editor><number-editor v-else-if=\"schema.type === 'number' || schema.type === 'integer'\" :schema=\"schema\" :initial-value=\"initialValue\" :title=\"title\" :theme=\"theme\" :locale=\"locale\" :icon=\"icon\" :readonly=\"readonly\" :required=\"required\" @update-value=\"$emit('update-value', $event)\" @delete=\"$emit('delete')\" :has-delete-button=\"hasDeleteButton\"></number-editor><boolean-editor v-else-if=\"schema.type === 'boolean'\" :schema=\"schema\" :initial-value=\"initialValue\" :title=\"title\" :theme=\"theme\" :locale=\"locale\" :icon=\"icon\" :readonly=\"readonly\" :required=\"required\" @update-value=\"$emit('update-value', $event)\" @delete=\"$emit('delete')\" :has-delete-button=\"hasDeleteButton\"></boolean-editor><null-editor v-else-if=\"schema.type === 'null'\" :schema=\"schema\" :initial-value=\"initialValue\" :title=\"title\" :theme=\"theme\" :locale=\"locale\" :icon=\"icon\" :readonly=\"readonly\" :required=\"required\" @update-value=\"$emit('update-value', $event)\" @delete=\"$emit('delete')\" :has-delete-button=\"hasDeleteButton\"></null-editor><string-editor v-else-if=\"schema.type === 'string'\" :schema=\"schema\" :initial-value=\"initialValue\" :title=\"title\" :theme=\"theme\" :locale=\"locale\" :icon=\"icon\" :readonly=\"readonly\" :required=\"required\" @update-value=\"$emit('update-value', $event)\" @delete=\"$emit('delete')\" :has-delete-button=\"hasDeleteButton\" :dragula=\"dragula\" :md=\"md\" :hljs=\"hljs\" :forceHttps=\"forceHttps\"></string-editor>";
export declare const vueIconTemplateHtml = "<button :class=\"theme.button\" @click=\"$emit('click')\"><span v-if=\"icon.isText\">{{text}}</span><i v-else :class=\"text\"></i></button>";
export declare const vueNullEditorTemplateHtml = "<div :class=\"theme.row\"><label :class=\"theme.label\">{{titleToShow}}<div :class=\"theme.buttonGroup\" :style=\"buttonGroupStyle\"><optional :required=\"required\" :value=\"value\" :isReadOnly=\"isReadOnly\" :theme=\"theme\" :locale=\"locale\" @toggleOptional=\"toggleOptional()\"></optional><icon v-if=\"hasDeleteButtonFunction\" @click=\"$emit('delete')\" :text=\"icon.delete\" :theme=\"theme\" :icon=\"icon\"></icon></div></label><description :theme=\"theme\" :message=\"schema.description\"></description></div>";
export declare const vueNumberEditorTemplateHtml = "<div :class=\"errorMessage ? theme.errorRow : theme.row\"><label :class=\"theme.label\">{{titleToShow}}<div :class=\"theme.buttonGroup\" :style=\"buttonGroupStyle\"><optional :required=\"required\" :value=\"value\" :isReadOnly=\"isReadOnly\" :theme=\"theme\" :locale=\"locale\" @toggleOptional=\"toggleOptional()\"></optional><icon v-if=\"hasDeleteButtonFunction\" @click=\"$emit('delete')\" :text=\"icon.delete\" :theme=\"theme\" :icon=\"icon\"></icon></div></label><input v-if=\"useInput\" :class=\"theme.formControl\" type=\"number\" @change=\"onChange($event)\" @keyup=\"onChange($event)\" :value=\"value\" :readOnly=\"isReadOnly\" :disabled=\"isReadOnly\"><select2 v-if=\"useSelect\" :data=\"options\" :value=\"value\" @update=\"updateSelection($event)\"></select2><description :theme=\"theme\" :message=\"schema.description\"></description><description :theme=\"theme\" :message=\"errorMessage\"></description></div>";
export declare const vueObjectEditorTemplateHtml = "<div :class=\"errorMessage ? theme.errorRow : theme.row\"><h3>{{titleToShow}}<div :class=\"theme.buttonGroup\" :style=\"buttonGroupStyle\"><optional :required=\"required\" :value=\"value\" :isReadOnly=\"isReadOnly\" :theme=\"theme\" :locale=\"locale\" @toggleOptional=\"toggleOptional()\"></optional><icon v-if=\"true\" @click=\"collapseOrExpand()\" :text=\"collapsed ? icon.expand : icon.collapse\" :theme=\"theme\" :icon=\"icon\"></icon><icon v-if=\"hasDeleteButtonFunction\" @click=\"$emit('delete')\" :text=\"icon.delete\" :theme=\"theme\" :icon=\"icon\"></icon></div></h3><description :theme=\"theme\" :message=\"schema.description\"></description><div v-if=\"!collapsed && value !== undefined\" :class=\"theme.rowContainer\"><div v-if=\"showFilter\" :class=\"theme.row\"><input :class=\"theme.formControl\" @change=\"onFilterChange($event)\" @keyup=\"onFilterChange($event)\" :value=\"filter\"></div><editor v-for=\"(p, i) in filteredProperties\" :key=\"p.property\" :schema=\"p.schema\" :title=\"p.schema.title || p.property\" :initial-value=\"value[p.property]\" @update-value=\"onChange(p.property, $event)\" :theme=\"theme\" :icon=\"icon\" :locale=\"locale\" :required=\"isRequired(p.property)\" :readonly=\"isReadOnly\" :dragula=\"dragula\" :md=\"md\" :hljs=\"hljs\" :force-https=\"forceHttps\"></editor></div><description :theme=\"theme\" :message=\"errorMessage\"></description></div>";
export declare const vueOptionalTemplateHtml = "<div v-if=\"hasOptionalCheckbox\" :class=\"theme.optionalCheckbox\"><label><input type=\"checkbox\" @change=\"$emit('toggleOptional')\" :checked=\"value === undefined\" :disabled=\"isReadOnly\"> {{locale.info.notExists}}</label></div>";
export declare const vueStringEditorTemplateHtml = "<div :class=\"errorMessage ? theme.errorRow : theme.row\"><label :class=\"theme.label\">{{titleToShow}}<div :class=\"theme.buttonGroup\" :style=\"buttonGroupStyle\"><optional :required=\"required\" :value=\"value\" :isReadOnly=\"isReadOnly\" :theme=\"theme\" :locale=\"locale\" @toggleOptional=\"toggleOptional()\"></optional><icon v-if=\"hasDeleteButtonFunction\" @click=\"$emit('delete')\" :text=\"icon.delete\" :theme=\"theme\" :icon=\"icon\"></icon><icon v-if=\"canPreview\" @click=\"collapseOrExpand()\" :text=\"collapsed ? icon.expand : icon.collapse\" :theme=\"theme\" :icon=\"icon\"></icon></div></label><textarea v-if=\"useTextArea\" :class=\"theme.formControl\" @change=\"onChange($event)\" @keyup=\"onChange($event)\" rows=\"10\" :readOnly=\"isReadOnly\" :disabled=\"isReadOnly\">{{value}}</textarea><input v-if=\"useInput\" :class=\"theme.formControl\" :type=\"schema.format\" @change=\"onChange($event)\" @keyup=\"onChange($event)\" :value=\"value\" :readOnly=\"isReadOnly\" :disabled=\"isReadOnly\"><select2 v-if=\"useSelect\" :data=\"options\" :value=\"value\" @update=\"updateSelection($event)\"></select2><img v-if=\"willPreviewImage\" :style=\"imagePreviewStyle\" :src=\"getImageUrl\"><markdown-tip v-if=\"useTextArea && willPreviewMarkdown\" :locale=\"locale.markdownTipLocale\"></markdown-tip><div v-if=\"willPreviewMarkdown\" v-html=\"getMarkdown\"></div><pre v-if=\"willPreviewCode\"><code v-html=\"getCode\"></code></pre><description :theme=\"theme\" :message=\"schema.description\"></description><description :theme=\"theme\" :message=\"errorMessage\"></description></div>";
export declare const vueTemplateHtml = "<editor :schema=\"schema\" :initial-value=\"initialValue\" :theme=\"themeObject\" :locale=\"localeObject\" :icon=\"iconObject\" :readonly=\"readonly\" :required=\"true\" @update-value=\"updateValue($event)\" :dragula=\"dragula\" :md=\"md\" :hljs=\"hljs\" :forceHttps=\"forceHttps\"></editor>";
