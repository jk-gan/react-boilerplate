// @flow

class Filter {
  data: any;

  append(field: string, value: any) {
    this.data = { [field]: value };
  }
}

export default new Filter();
