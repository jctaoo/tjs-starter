const { writeFile } = require("./utils");

const template = `
root = true

[*]
indent_style = space
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100
indent_size = 2

[*.md]
trim_trailing_whitespace = false
`.trim();

function configureEditorConfig() {
  writeFile(".editorconfig", template);
}

module.exports.configureEditorConfig = configureEditorConfig;
