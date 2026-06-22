const TOOLBOXES = {

    basica: `
    <xml xmlns="https://developers.google.com/blockly/xml">

        <block type="draw_on"></block>

        <block type="draw_off"></block>

        <block type="move"></block>

    </xml>
    `,

    repeticao: `
    <xml xmlns="https://developers.google.com/blockly/xml">

        <block type="draw_on"></block>

        <block type="draw_off"></block>

        <block type="move"></block>

        <block type="controls_for_custom">

            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>

            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>

            <value name="STEP">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>

        </block>

    </xml>
    `
};