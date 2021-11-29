
class ServerError extends Error {
  constructor(msg, status) {
    super(msg);
    this.status = status;
  }
};

export const reqBodyValidator = req => {
  if (!req.is('application/json')) {
    throw new ServerError('Body of post request must be JSON', 400);
  }

};

export const idValidator = (id, items) => {
  if (items.filter(i => i.id === id).length === 0) {
    throw new ServerError('ID does not exist', 404);
  }
};


export const nextId = itemsArray => {
  const highestId = itemsArray.reduce((accumulator, currentValue) => (currentValue.id > accumulator ? currentValue.id : accumulator), 0);
  return Number.parseInt(highestId, 10) + 1;
};