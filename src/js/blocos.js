Blockly.defineBlocksWithJsonArray([

    {
        "type": "draw_on",
        "message0": "Desenhar ON",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160
    },
    {
        "type": "draw_off",
        "message0": "Desenhar OFF",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 9
    },
    {
        "type": "move",
        "message0": "Mover %1 passos %2",
        "args0": [
            {
                "type": "field_input",
                "name": "STEPS",
                "text": "1",
            },
            {
                "type": "field_dropdown",
                "name": "DIR",
                "options": [
                    ["↑ cima", "UP"],
                    ["↓ baixo", "DOWN"],
                    ["← esquerda", "LEFT"],
                    ["→ direita", "RIGHT"]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 380
    },
    {
    "type": "controls_for_custom",
    "message0": "para %1 de %2 até %3 passo %4 %5",
    "args0": [
        {
            "type": "field_variable",
            "name": "VAR",
            "variable": "n"
        },
        {
            "type": "input_value",
            "name": "FROM",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "TO",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "STEP",
            "check": "Number"
        },
        {
            "type": "input_statement",
            "name": "DO"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
    
}

]);

/* -----------------------
   3. GERAR CÓDIGO
--------------------------*/
Blockly.JavaScript.forBlock['draw_on'] = function(block) {
  return 'AUX.DRAW = true;\n';
};

Blockly.JavaScript.forBlock['draw_off'] = function(block) {
  return 'AUX.DRAW = false;\n';
};

Blockly.JavaScript.forBlock['move'] = function(block) {
    const steps = block.getFieldValue('STEPS');
    const dir = block.getFieldValue('DIR');
    if (!/^[0-9a-zA-Z+\-*/() ]+$/.test(steps)) {
    alert("Expressão inválida");
    return ""; }
    return `move("${dir}", (${steps}));\n`;
};

Blockly.JavaScript.forBlock['controls_for_custom'] = function(block) {
    const variable = Blockly.JavaScript.nameDB_.getName(
        block.getFieldValue('VAR'),
        Blockly.VARIABLE_CATEGORY_NAME
    );
    const from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC) || 1;

    const branch = Blockly.JavaScript.statementToCode(block, 'DO');

    const code = `
for (let ${variable} = ${from}; ${variable} <= ${to}; ${variable} += ${step}) {
    ${branch}
}
`;
    return code;
};