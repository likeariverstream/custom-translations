export class BaseController {
  constructor() {
    this.controller = this.controller.bind(this)
    this.run = this.run.bind(this)
    this.validate = this.validate.bind(this)
  }

  get bodySchema() {
    return null
  }

  get querySchema() {
    return null
  }

  validate() {
    if (this.bodySchema) {

    }

    if (this.querySchema) {

    }

  }
  controller() {
    throw new SyntaxError('method required')
  }

  async run(req, res, next) {
    try {
      const result = await this.controller(req)
      res.status(200).send(result)

    } catch (err) {
      return next(err)
    }
  }

}