Blockly.Python['input'] = function(block) {
  var value_in = Blockly.Python.valueToCode(block, 'in', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'input(in)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};