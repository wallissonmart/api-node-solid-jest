const customMessage = (field: string) => {
  return {
    'string.empty': `O campo ${field} não pode ser vazio!`,
    'any.required': `O campo ${field} é obrigatório!`,
    'string.base': `O campo ${field} precisa ser uma string!`,
  };
};

export { customMessage };
