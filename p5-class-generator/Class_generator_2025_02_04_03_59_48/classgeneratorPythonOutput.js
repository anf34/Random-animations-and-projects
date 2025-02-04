class ClassBlueprint {
  constructor(name, attributes, methods) {
    this.validateInput(name, attributes, methods);
    this.name = name;
    this.attributes = attributes;
    this.methods = methods;
    this.camelname = this.camelToSnake(name);
  }

  validateInput(name, attributes, methods) {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("Name must be a non-empty string.");
    }
    if (!Array.isArray(attributes) || attributes.length === 0) {
      throw new Error("Attributes must be a non-empty list.");
    }
    if (!Array.isArray(methods) || methods.length === 0) {
      throw new Error("Methods must be a non-empty list.");
    }
  }

  camelToSnake(text) {
    return text.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  }

  generateClassCode() {
    let code = `class ${this.name}:\n`;
    code += `    def __init__(self, ${this.attributes.map(attr => attr[0]).join(", ")}):\n`;
    
    code += `        self.validate_input(${this.attributes.map(attr => attr[0]).join(", ")})\n`;
    
    for (let attr of this.attributes) {
      code += `        self.${attr[0]} = ${attr[0]}\n`;
    }
    
    code += "\n";
    
    code += `    def validate_input(self, ${this.attributes.map(attr => attr[0]).join(", ")}):\n`;
    for (let attr of this.attributes) {
      let attrName = attr[0];
      let attrType = attr[1];
      if (attrType === "int") {
        code += `        if not isinstance(${attrName}, ${attrType}):\n`;
      } else {
        code += `        if not (${attrName} and isinstance(${attrName}, ${attrType})):\n`;
      }
      code += `            raise TypeError("${attrName} must be of type ${attrType} and non-empty.")\n`;
    }
    
    code += "\n";
    
    for (let attr of this.attributes) {
      let attrName = attr[0];
      code += `    def get_${attrName}(self):\n        return self.${attrName}\n\n`;
      code += `    def set_${attrName}(self, ${attrName}):\n`;
      code += `        self.validate_${attrName}(${attrName})\n`;
      code += `        self.${attrName} = ${attrName}\n\n`;
    }

    for (let method of this.methods) {
      code += `    def ${this.camelToSnake(method)}(self):\n        pass\n\n`;
    }

    return code;
  }
}