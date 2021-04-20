class BaseModel {
  constructor({ status, data, message }) {
    this.status = status;
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(message, data = {}) {
    super({
      status: 200,
      data,
      message,
    });
  }
}

class ErrorModel extends BaseModel {
  constructor({ status, message }) {
    super({
      status,
      message,
    });
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
